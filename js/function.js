var loadNumber = 0;
for (loadNumber; loadNumber <= 24; loadNumber++) {
    if(loadNumber > 9) {
        $('.loading').append(`
            <img src="./img/loading/Intro_000${loadNumber}.png" class="loading__img ${loadNumber}" alt="">
        `)

    }else {
        $('.loading').append(`
            <img src="./img/loading/Intro_0000${loadNumber}.png" class="loading__img ${loadNumber}" alt="">
        `)
    }
}

$(window).on('load', function(){

    $('.load').remove();
    $(`.loading__img`).hide();
    $(`.avatar__cover`).hide();

    let intervalTime = 100;

    const LoadingInterval = setInterval(Loading, intervalTime)

    let loadingNumber = 0;
    function Loading (){
        $(`.loading__img`).hide()
        loadingNumber += 1;
        $(`.loading__img.${loadingNumber}`).show()
        if(loadingNumber == 24){
            clearInterval(LoadingInterval);
            setInterval(coverImage, intervalTime)
            $('.loading').remove();
        }
    }
    
    let coverNumber = 107;
    function coverImage(){
        $(`.avatar__cover`).hide()
        coverNumber += 1;

        // if menu hover 
        if( $('.menu__item--text').hasClass('glitch') ){
            $(`.avatar__cover.hover__cover.${coverNumber}`).show()
        }else {
            $(`.avatar__cover.default__cover.${coverNumber}`).show()
        }

        if(coverNumber == 213){
            coverNumber = 107;
        }
    }
});

$('.open-second-page').on("click", function(){
    console.log(1)
    $('.main').removeClass('active');
    $('.second').addClass('active');
})
$('.second-close').on("click", function(){
    $('.main').addClass('active');
    $('.second').removeClass('active');
})

$('.menu__item--text').on("mouseenter", function(){
    $(this).addClass('glitch');
})
$('.menu__item--text').on("mouseleave", function(){
    $('.menu__item--text').removeClass('glitch');
})