let intervalTime = 100;

var secondRender = `
    <div class="container">
        <button class="second-close">
            <img src="./img/icons/back-arrow.svg" alt="">
        </button>
        <div class="list">
        </div>
    </div>
`;

$('.second').append(secondRender);

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

    pageAnimation();
    workHover();
    aboutHover();
    contactHover();
    bgChangeList();
});

function pageAnimation(){
    var index = 535;
    for (index; index <= 600; index++) {
        $('.second__avatar').append(`
            <img src="./img/page-avatar/Trigger_Work_Animation_00${index}.png" alt="" class="second__avatar--cover ${index}">
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

$('body').on('click', '.open-second-page', function(){
    $('.second').html(' ');
    $('.second').append(secondRender);
    // $('.main').removeClass('active');
    $('.second').addClass('active');
    $('.second').addClass('post-animation-on');
    $('.second').removeClass('post-animation-off');

    const LoadingInterval = setInterval(Loading, 30)

    let loadingNumber = 535;
    function Loading (){
        console.log(1)
        $('.avatar').hide();
        loadingNumber += 1;
        $(`.second__avatar--cover`).removeClass('active');
        $(`.second__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.second__avatar`).addClass('active')
        if(loadingNumber == 600){
            postedWork();
            clearInterval(LoadingInterval);
        }
    }
})

$('body').on('click', '.second-close', function(){
    changeUnSetBg();
    $('.second, .about-page').removeClass('post-animation-on');
    $('.second, .about-page').addClass('post-animation-off');
    const LoadingInterval = setInterval(Loading, 20)
    
    let loadingNumber = 600;
    function Loading (){
        loadingNumber -= 1;
        $(`.second__avatar--cover`).removeClass('active');
        $(`.second__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.second__avatar`).removeClass('active')
        if(loadingNumber == 535){
            clearInterval(LoadingInterval);
            $('.main').addClass('active');
            $('.second').removeClass('active');
            $('.avatar').show();
            $('.second').html(' ');
            $('.menu__item--text').removeClass('page-active');
            $('.menu__item--text').show();
            $(`.second__avatar--cover`).removeClass('active')
        }
    }
})

// menu click active
$('.menu__item--text').on("click", function(){
    changeSetBg();
    $('.menu__item--text').hide();
    $(this).addClass('page-active');
})

// menu glich effect 
$('.menu__item--text').on("mouseenter", function(){
    $(this).addClass('glitch');
})

// hover effect
$('.menu__item--work').on("mouseenter", function(){
    $(this).addClass('active')
})
$('.menu__item--about').on("mouseenter", function(){
    $(this).addClass('active')
})
$('.menu__item--contact').on("mouseenter", function(){
    $(this).addClass('active')
})

// delete effect
$('.menu__item--text').on("mouseleave", function(){
    $('.menu__item--text').removeClass('glitch');
    $('.menu__item--text').removeClass('active');
})

$('body').on('click', '.menu__item--about', function(){
    $('.about-page').html(' ');
    $('.about-page').append(secondRender);
    // $('.main').removeClass('active');
    $('.about-page').addClass('active')
    $('.about-page').addClass('post-animation-on');
    $('.about-page').removeClass('post-animation-off');

    const LoadingInterval = setInterval(Loading, 30)

    let loadingNumber = 535;
    function Loading (){
        console.log(1)
        $('.avatar').hide();
        loadingNumber += 1;
        $(`.second__avatar--cover`).removeClass('active');
        $(`.second__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.second__avatar`).addClass('active')
        if(loadingNumber == 600){
            postedWork();
            clearInterval(LoadingInterval);
        }
    }
})


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
        data.map( (item,id) => {
            $('.list').append(`
            <div class="list__item">
                <div class="list__item--cat">${item.role}</div>
                <div class="list__item--cover">
                    <p class="list__item--number">${(id+1) < 10 ? '0'+(id + 1) : id}</p>
                    <img src="${item.cover.url}" alt="" class="list__item--img">
                </div>
                <h1 class="list__item--title">${item.title}</h1>
                <div class="list__item--desc">${item.description}</div>
                <li>
                    <a href="https://${item.link}" class="list__item--link" target="_blank">
                        Case Study
                        <img src="./img/icons/link-arrow.svg" alt="">
                    </a>
                </li>
            </div>
            `)
        })
    })
}



function changeSetBg(){
    const LoadingInterval = setInterval(Loading, 10)

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