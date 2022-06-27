var loadingNumber = 0;
for (loadingNumber; loadingNumber <= 24; loadingNumber++) {
    if(loadingNumber > 9) {
        $('.loading').append(`
            <img src="./img/loading/Intro_000${loadingNumber}-min.png" class="loading__img ${loadingNumber}" alt="">
        `)

    }else {
        $('.loading').append(`
            <img src="./img/loading/Intro_0000${loadingNumber}-min.png" class="loading__img ${loadingNumber}" alt="">
        `)
    }
}

var coverNumber = 107;
for (coverNumber; coverNumber <= 213; coverNumber++) {
    $('.avatar.default').append(`
        <img src="./img/native/Idle_00${coverNumber}.png" alt="" class="avatar__cover default__cover ${coverNumber}">
    `)
    $('.avatar.hover').append(`
        <img src="./img/hover/Work_Idle_00${coverNumber}-min.png" alt="" class="avatar__cover hover__cover ${coverNumber}">
    `)
}


$( document ).ready(function() {
    setTimeout(() => {
        $('.load').remove();
        $(`.loading__img`).hide();
        $(`.avatar__cover`).hide();
    
        const LoadingInterval = setInterval(Loading, 100)
    
        let loadingNumber = 0;
        function Loading (){
            $(`.loading__img`).hide()
            loadingNumber += 1;
            $(`.loading__img.${loadingNumber}`).show()
            if(loadingNumber == 24){
                clearInterval(LoadingInterval);
                setInterval(coverImage, 100)
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
    }, 4000);

    // let array = [];
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

});




$('.open-second-page').on("click", function(){
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







