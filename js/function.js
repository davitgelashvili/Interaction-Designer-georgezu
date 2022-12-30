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
    $('.load').remove();

    // თუ ინტრო ლოადინგი არ არის 
    setInterval(coverImage, intervalTime)
    
    let coverNumber = 107;
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

        if(coverNumber == 213){
            coverNumber = 107;
        }
    }

    workHover();
    aboutHover();
    contactHover();
    bgChangeList();
    workAnimation();
    aboutAnimation();
    contactAnimation();


    const mouseWheel = document.querySelector("body");
    const scrollContainer = document.querySelector(".about-page__footer--slider");
    const highlightedItems = document.querySelectorAll(".slider__item");

    mouseWheel.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        console.log(evt)
        highlightedItems.forEach(userItem => {
            evt.path[1].target.style.transform  = `translateY(0px)`;
        });
    });

});

// menu click
$('body').on('click', '.menu__item--text', function(){

    setTimeout(() => {
        $('.menu__item--text').hide();
        $(this).addClass('page-active');
    }, 1000);

    var menuData = $(this).data('link');
    $('.page').each((key, element)=>{
        if( menuData == $(element).data('page') ) {
            openPage(element)

            if( $(element).hasClass('work') ){
                workPageOpen(element)
            }

            if( $(element).hasClass('about') ){
                aboutPageOpen(element)
            }

            if( $(element).hasClass('contact') ){
                contactPageOpen(element)
            }
        }
    })
})

// close click
$('body').on('click', '.close-work', function(){
    $('.menu__item--text').show();
    $('.menu__item--text').removeClass('page-active');
    
    workPageClose($('.work-page'));
    closePage(('.work-page'));
})

$('body').on('click', '.close-about', function(){
    $('.menu__item--text').show();
    $('.menu__item--text').removeClass('page-active');
    
    aboutPageClose($('.about-page'));
    closePage(('.about-page'));
})

$('body').on('click', '.close-contact', function(){
    $('.menu__item--text').show();
    $('.menu__item--text').removeClass('page-active');
    
    contactPageClose($('.contact-page'));
    closePage(('.contact-page'));
})

// all pae function 
function changeSetBg(){
    const LoadingInterval = setInterval(Loading, 15)

    let loadingNumber = 535;
    function Loading (){
        loadingNumber += 1;

        $(`.bg__cover`).hide();
        $(`.bg__cover.${loadingNumber}`).show();
        if(loadingNumber == 592){
            clearInterval(LoadingInterval);
        }
    }
}

function changeUnSetBg(){
    const LoadingInterval = setInterval(Loading, 10)

    let loadingNumber = 592;
    function Loading (){
        loadingNumber -= 1;
        $(`.bg__cover`).hide();
        $(`.bg__cover.${loadingNumber}`).show();
        if(loadingNumber == 534){
            clearInterval(LoadingInterval);
        }
    }
}

function openPage(element){
    $('body').addClass('not-click');
    $('.menu__item--text').removeClass('glitch');
    $('.menu__item--text').removeClass('active');
    changeSetBg();
    // setTimeout(() => {
    //     $(element).addClass('active')
    //     $(element).addClass('post-animation-on');
    //     $(element).removeClass('post-animation-off');
    // }, 5500);
}

function closePage(element) {
    $('body').addClass('not-click');
    changeUnSetBg();
    $(element).removeClass('active')
    $(element).addClass('post-animation-off');
    $(element).removeClass('post-animation-on');
    $('.animation').removeClass('show');
    $('.animation').removeClass('true');
    $('.animation').removeClass('false');
}

// open page function
function workPageOpen(element){
    // $(element).html(' ');
    // $(element).append(secondRender);
    setTimeout(() => {
        $(element).addClass('active');
    }, 1000);

    const LoadingInterval = setInterval(Loading, 40)

    let loadingNumber = 535;
    function Loading (){
        $('.avatar').hide();
        loadingNumber += 1;
        $(`.work-page__avatar--cover`).removeClass('active');
        $(`.work-page__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.work-page__avatar`).addClass('active')

        if(loadingNumber == 570) {
            postedWork();
        }

        if(loadingNumber == 586){
            clearInterval(LoadingInterval); 
            $('body').removeClass('not-click'); 
        }
    }
}
function aboutPageOpen(element){
    setTimeout(() => {
        $(element).addClass('active');
    }, 1000);

    const LoadingInterval = setInterval(Loading, 25)

    let loadingNumber = 601;
    function Loading (){
        $('.avatar').hide();
        loadingNumber += 1;
        $(`.about-page__avatar--cover`).removeClass('active');
        $(`.about-page__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.about-page__avatar`).addClass('active')

        if(loadingNumber == 680) {
            aboutScrollAnimation();
        }

        if(loadingNumber == 714){
            clearInterval(LoadingInterval);
            $('body').removeClass('not-click'); 
        }
        
    }
}
function contactPageOpen(element){
    setTimeout(() => {
        $(element).addClass('active');
    }, 1000);

    const LoadingInterval = setInterval(Loading, 50)

    let loadingNumber = 0;
    function Loading (){
        $('.avatar').hide();
        loadingNumber += 1;
        $(`.contact-page__avatar--cover`).removeClass('active');
        $(`.contact-page__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.contact-page__avatar`).addClass('active')
        if(loadingNumber == 70){
            contactScrollAnimation();
            clearInterval(LoadingInterval);
            $('body').removeClass('not-click'); 
        }
    }
}


// close page function 
function workPageClose(element){
    const LoadingInterval = setInterval(Loading, 40)
    
    let loadingNumber = 586;
    function Loading (){
        loadingNumber -= 1;
        $(`.work-page__avatar--cover`).removeClass('active');
        $(`.work-page__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.work-page__avatar`).removeClass('active')
        if(loadingNumber == 535){
            clearInterval(LoadingInterval);
            $('.main').addClass('active');
            $(element).removeClass('active');
            $('.avatar').show();
            // $(element).html(' ');
            $(`.work-page__avatar--cover`).removeClass('active')
            $('body').removeClass('not-click'); 
        }
    }
}

function aboutPageClose(element){
    const LoadingInterval = setInterval(Loading, 25)
    
    let loadingNumber = 714;
    function Loading (){
        loadingNumber -= 1;
        $(`.about-page__avatar--cover`).removeClass('active');
        $(`.about-page__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.about-page__avatar`).removeClass('active')
        if(loadingNumber == 601){
            clearInterval(LoadingInterval);
            $('.main').addClass('active');
            $(element).removeClass('active');
            $('.avatar').show();
            $(`.about-page__avatar--cover`).removeClass('active')
            $('body').removeClass('not-click'); 
        }
    }
}

function contactPageClose(element){
    const LoadingInterval = setInterval(Loading, 50)
    
    let loadingNumber = 70;
    function Loading (){
        loadingNumber -= 1;
        $(`.contact-page__avatar--cover`).removeClass('active');
        $(`.contact-page__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.contact-page__avatar`).removeClass('active')
        if(loadingNumber == 0){
            clearInterval(LoadingInterval);
            $('.main').addClass('active');
            $(element).removeClass('active');
            $('.avatar').show();
            $(`.contact-page__avatar--cover`).removeClass('active')
            $('body').removeClass('not-click'); 
        }
    }
}


// page animations 
function workAnimation(){
    var index = 535;
    for (index; index <= 586; index++) {
        $('.work-page__avatar').append(`
            <img src="./img/work-avatar/Trigger_Work_Animation_00${index}.png" alt="" class="animation-avatar__cover work-page__avatar--cover ${index}">
        `)
    }
}

function aboutAnimation(){
    var index = 601;
    for (index; index <= 714; index++) {
        $('.about-page__avatar').append(`
            <img src="./img/about-avatar/Trigger_About_Animation_00${index}.png" alt="" class="animation-avatar__cover about-page__avatar--cover ${index}">
        `)
    }
}

function contactAnimation(){
    var index = 0;
    for (index; index <= 70; index++) {
        $('.contact-page__avatar').append(`
            <img src="./img/contact-avatar/ContactClick${index}.png" alt="" class="animation-avatar__cover contact-page__avatar--cover ${index}">
        `)
    }
}

function workHover(){
    var index = 107;
    for (index; index <= 213; index++) {
        $('.avatar.hover.work').append(`
            <img src="./img/hover-work/Idle_Avatar_Animation _Work_00${index}.png" alt="" class="avatar__cover hover__cover work ${index}" style="display: none;">
        `)
    }
}

function aboutHover(){
    var index = 107;
    for (index; index <= 213; index++) {
        $('.avatar.hover.about').append(`
            <img src="./img/hover-about/Idle_Avatar_Animation_About_V2_00${index}.png" alt="" class="avatar__cover hover__cover about ${index}" style="display: none;">
        `)
    }
}

function contactHover(){
    var index = 107;
    for (index; index <= 213; index++) {
        $('.avatar.hover.contact').append(`
            <img src="./img/hover-contact/Idle_Avatar_Animation _Contact_00${index}.png" alt="" class="avatar__cover hover__cover contact ${index}" style="display: none;">
        `)
    }
}

function bgChangeList(){
    var index = 535;
    for (index; index <= 592; index++) {
        $('.bg').append(`
            <img src="./img/bg/Transition_00${index}.png" alt="" class="bg__cover ${index}" style="display: none;">
        `)
    }
}

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
                }`
            }),
    })
    .then(res => res.json())
    .then((res) => {
        let data = res.data.allPortfolios;
        console.log(res)

        data.map( (item,id) => {
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