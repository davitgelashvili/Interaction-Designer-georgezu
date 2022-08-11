let intervalTime = 50;

var secondRender = `
    <div class="container">
        <div class="second">
            <button class="close-page">
                <img src="./img/icons/back-arrow.svg" alt="">
            </button>
            <div class="list">
            </div>
        </div>
    </div>
`;

$('.work-page').append(secondRender);

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

    workAnimation();
    aboutAnimation();
    workHover();
    aboutHover();
    contactHover();
    bgChangeList();
});

// menu click
$('body').on('click', '.menu__item--text', function(){
    $('.menu__item--text').hide();
    $(this).addClass('page-active');

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
$('body').on('click', '.close-page', function(){
    $('.menu__item--text').show();
    $('.menu__item--text').removeClass('page-active');

    $('.page').each((key, element)=>{
        if( $(element).hasClass('active') ) {
            closePage(element);
            
            if( $(element).hasClass('work') ){
                workPageClose(element);
            }

            if( $(element).hasClass('about') ){
                aboutPageClose(element);
            }

            if( $(element).hasClass('contact') ){
                contactPageClose(element);
            }
        }
    })
})

// all pae function 
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

function openPage(element){
    changeSetBg();
    $(element).addClass('active')
    $(element).addClass('post-animation-on');
    $(element).removeClass('post-animation-off');
}

function closePage(element) {
    changeUnSetBg();
    $(element).removeClass('active')
    $(element).addClass('post-animation-off');
    $(element).removeClass('post-animation-on');
}

// open page function
function workPageOpen(element){
    $(element).html(' ');
    $(element).append(secondRender);
    $(element).addClass('active');

    const LoadingInterval = setInterval(Loading, 30)

    let loadingNumber = 535;
    function Loading (){
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
}
function aboutPageOpen(element){
    $(element).addClass('active');
    const LoadingInterval = setInterval(Loading, 10)

    let loadingNumber = 286;
    function Loading (){
        $('.avatar').hide();
        loadingNumber += 1;
        $(`.second__avatar--cover`).removeClass('active');
        $(`.second__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.second__avatar`).addClass('active')
        if(loadingNumber == 449){
            clearInterval(LoadingInterval);
        }
    }
}
function contactPageOpen(element){
    $(element).addClass('active');
    const LoadingInterval = setInterval(Loading, 30)

    let loadingNumber = 535;
    function Loading (){
        $('.avatar').hide();
        loadingNumber += 1;
        $(`.second__avatar--cover`).removeClass('active');
        $(`.second__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.second__avatar`).addClass('active')
        if(loadingNumber == 600){
            clearInterval(LoadingInterval);
        }
    }
}


// close page function 
function workPageClose(element){
    const LoadingInterval = setInterval(Loading, 10)
    
    let loadingNumber = 600;
    function Loading (){
        loadingNumber -= 1;
        $(`.second__avatar--cover`).removeClass('active');
        $(`.second__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.second__avatar`).removeClass('active')
        if(loadingNumber == 535){
            clearInterval(LoadingInterval);
            $('.main').addClass('active');
            $(element).removeClass('active');
            $('.avatar').show();
            $(element).html(' ');
            $(`.second__avatar--cover`).removeClass('active')
        }
    }
}

function aboutPageClose(element){
    const LoadingInterval = setInterval(Loading, 10)
    
    let loadingNumber = 449;
    function Loading (){
        loadingNumber -= 1;
        $(`.second__avatar--cover`).removeClass('active');
        $(`.second__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.second__avatar`).removeClass('active')
        if(loadingNumber == 286){
            clearInterval(LoadingInterval);
            $('.main').addClass('active');
            $(element).removeClass('active');
            $('.avatar').show();
            $(`.second__avatar--cover`).removeClass('active')
        }
    }
}

function contactPageClose(element){
    const LoadingInterval = setInterval(Loading, 10)
    
    let loadingNumber = 600;
    function Loading (){
        loadingNumber -= 1;
        $(`.second__avatar--cover`).removeClass('active');
        $(`.second__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.second__avatar`).removeClass('active')
        if(loadingNumber == 535){
            clearInterval(LoadingInterval);
            $('.main').addClass('active');
            $(element).removeClass('active');
            $('.avatar').show();
            $(`.second__avatar--cover`).removeClass('active')
        }
    }
}


// page animations 
function workAnimation(){
    var index = 535;
    for (index; index <= 600; index++) {
        $('.second__avatar').append(`
            <img src="./img/work-avatar/Trigger_Work_Animation_00${index}.png" alt="" class="second__avatar--cover ${index}">
        `)
    }
}

function aboutAnimation(){
    var index = 286;
    for (index; index <= 449; index++) {
        $('.second__avatar').append(`
            <img src="./img/about-avatar/0${index}_optimized.png" alt="" class="second__avatar--cover ${index}">
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


$('.owl-carousel').owlCarousel({
    loop:false,
    margin:230,
    nav: false,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2,
        }
    }
})