function mobileOrDesktop() {
    if( $(window).width() > 1024 ) {
        window.location.href = './../';
    }
}
mobileOrDesktop()
$( window ).resize(function() {
    mobileOrDesktop()
});

let intervalTime = 50;

var secondRender = `
    <div class="container">
        <div class="second">
            <button class="close-page close-work">
                <img src="./img/icons/back-arrow.svg" alt="">
            </button>
            <div class="list card-cntr">
            </div>
        </div>
    </div>
`;

// $('.work-page').append(secondRender);

$(window).on('load', function(){
    setTimeout(() => {
        $('.load').remove();
    }, 1000);

    // თუ ინტრო ლოადინგი არ არის 
    setInterval(coverImage, intervalTime)
    
    let coverNumber = 1;
    function coverImage(){
        $(`.avatar__cover`).hide()
        coverNumber += 1;

        // if menu hover 
        if( $('.menu__item--text').hasClass('glitch') ){
            $(`.avatar__cover.default__cover.${coverNumber}`).show();

            if($('.menu__item--work').hasClass('active')){
                $(`.avatar__cover.hover__cover.work.${coverNumber}`).show()
            }

            if($('.menu__item--about').hasClass('active')){
                $(`.avatar__cover.hover__cover.about.${coverNumber}`).show()
            }

            if($('.menu__item--contact').hasClass('active')){
                $(`.avatar__cover.hover__cover.contact.${coverNumber}`).show()
            }
        }else {
            $(`.avatar__cover.default__cover.${coverNumber}`).show()
            $(`.avatar__cover.skins__cover.${coverNumber}`).show()
        }

        if(coverNumber == 107){
            coverNumber = 1;
        }
    }

    const date = new Date();
    $('.js-time').html(`${date.getHours()}:${date.getMinutes()}`)

    const token = 'd820991ca43cc815adf1a0a4a2e08a';
    fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: `{ 
                    aboutContact { eMail },
                }`
            }),
    })
    .then(res => res.json())
    .then((res) => {
        let eMail = res?.data?.aboutContact?.eMail;
        
        $('.email-js').append(`
            <a href="mailto:${eMail}" class="contact-page__footer--email">
                ${eMail}
            </a>
        `)
    })
});

// post api 
function postedWork(){
    const token = 'd820991ca43cc815adf1a0a4a2e08a';
    fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: `{ 
                    allPortfolios { id, role, title, description, cover {url}, link },
                    aboutContact { id, aboutDescription, contactDescription, contactTitle },
                    allMySocialsNetworks { id, socialLink, socialTitle },
                }`
            }),
    })
    .then(res => res.json())
    .then((res) => {
        let data = res?.data?.allPortfolios;
        let socialData = res?.data?.allMySocialsNetworks;
        let contactText = res?.data?.aboutContact?.contactDescription;
        let contactTitle = res?.data?.aboutContact?.contactTitle;
        let aboutText = res?.data?.aboutContact?.aboutDescription;

        $('.about-page--desc > p').html(aboutText)
        $('.contact-page__desc').html(contactText)
        $('.contact-page__title').html(contactTitle)
        
        data?.map( (item,id) => {
            console.log(id)
            $('.list').append(`
            <div class="list__item--out">
                <div class="list__item work-animation animation">
                    <div class="list__item--cat">${item.role}</div>
                    <div class="list__item--cover">
                        <p class="list__item--number">${(id+1) < 10 ? '0'+(id + 1) : id}</p>
                        <img src="${item.cover.url}" alt="" class="list__item--img">
                    </div>
                    <h1 class="list__item--title">${item.title}</h1>
                    <div class="list__item--desc">${item.description}</div>
                    <li>
                        <a href="./detail/?filter=${item.id}" class="list__item--link">
                            Case Study
                            <img src="./img/icons/link-arrow.svg" alt="">
                        </a>
                    </li>
                </div>
            </div>
            `)
        })

        socialData?.map( (item) => {
            console.log(item)
            $('.contact-soc').append(`
                <a href="${item.socialLink}" target="_blank">
                    ${item.socialTitle}
                    <?xml version="1.0" encoding="UTF-8"?>
                    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>7EC17BFC-2379-408F-95B0-000F8851C09B</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Contact-Mobile" transform="translate(-187.000000, -464.000000)" fill="#4B18EF">
                                <polygon id="Path" points="202.095634 465.804022 202.095634 477.021308 203 477.021308 203 464.449011 203 464 202.547817 464 189.886689 464 189.886689 464.898022 201.40931 464.898022 187 479.206239 187.799355 480"></polygon>
                            </g>
                        </g>
                    </svg>
                </a>
            `)
        } )
    }).finally(() => workScrollAnimation())
}

// menu glich effect 
$('.menu__item--text').on("mouseenter", function(){
    $(this).addClass('glitch');
    $(this).addClass('active')
})

// delete effect
$('.menu__item--text').on("mouseleave", function(){
    $('.menu__item--text').removeClass('glitch');
    $('.menu__item--text').removeClass('active');
})

function workScrollAnimation(){

    const cards = document.querySelectorAll(".work-animation")

    // Intersection Observer function
    const observer = new IntersectionObserver( 
        entries => {
            entries.forEach(entry => {
                // When an entry enters the viewport, add the class "show":
                // entry.target.classList.add("show", entry.isIntersecting)
                if (entry.isIntersecting) {
                    entry.target.classList.add("show")
                  } else {
                    entry.target.classList.remove("show")
                  }

                // To keep entries from fading out after, unobserve the entry with:
                    // if (entry.isIntersecting) observer.unobserve(entry.target)
            })
        }, 
        {
            // Threshold of 1 = 100% - entry needed to be in viewport before the class "show" is added
            threshold: 0.1,
        }        
    )


    // Intersection Observer to observe the cards
    cards.forEach(card => { 
        observer.observe(card) 
    })
}

function aboutScrollAnimation(){
    setTimeout(() => {
        $('p.about-animation').addClass('show')
    }, 700);

    setTimeout(() => {
        $('div.about-animation').addClass('show')
    }, 1300);
}

function contactScrollAnimation(){
    setTimeout(() => {
        $('.contact-animation:nth-of-type(1)').addClass('show')
    }, 100);

    setTimeout(() => {
        $('.contact-animation:nth-of-type(2)').addClass('show')
    }, 300);
}