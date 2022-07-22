let intervalTime = 100;

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
            $(`.avatar__cover.hover__cover.${coverNumber}`).show()
            $(`.avatar__cover.default__cover.${coverNumber}`).show()
        }else {
            $(`.avatar__cover.default__cover.${coverNumber}`).show()
            $(`.avatar__cover.skins__cover.${coverNumber}`).show()
        }

        if(coverNumber == 213){
            coverNumber = 107;
        }
    }

    workAnimation();
});

function workAnimation(){
    var index = 311;
    for (index; index <= 349; index++) {
        $('.second__avatar').append(`
            <img src="./img/work/0${index}_optimized.png" alt="" class="second__avatar--cover ${index}">
        `)
    }
}

$('body').on('click', '.open-second-page', function(){
    $('.main').removeClass('active');
    $('.second').addClass('active');
    $('.second').addClass('post-animation-on');
    $('.second').removeClass('post-animation-off');

    const LoadingInterval = setInterval(Loading, 30)

    let loadingNumber = 310;
    function Loading (){
        $('.avatar').hide();
        loadingNumber += 1;
        $(`.second__avatar--cover`).removeClass('active');
        $(`.second__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.second__avatar`).addClass('active')
        if(loadingNumber == 349){
            postedWork();
            clearInterval(LoadingInterval);
        }
    }
})

$('.second-close').on("click", function(){
    $('.second').removeClass('post-animation-on');
    $('.second').addClass('post-animation-off');
    const LoadingInterval = setInterval(Loading, 20)
    
    let loadingNumber = 349;
    function Loading (){
        loadingNumber -= 1;
        $(`.second__avatar--cover`).removeClass('active');
        $(`.second__avatar--cover.${loadingNumber}`).addClass('active')
        $(`.second__avatar`).removeClass('active')
        if(loadingNumber == 310){
            $('.main').addClass('active');
            $('.second').removeClass('active');
            $('.avatar').show();
            clearInterval(LoadingInterval);
        }
    }
})

$('.menu__item--text').on("mouseenter", function(){
    $(this).addClass('glitch');
})
$('.menu__item--text').on("mouseleave", function(){
    $('.menu__item--text').removeClass('glitch');
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
                        --->
                    </a>
                </li>
            </div>
            `)
        })
    })
}