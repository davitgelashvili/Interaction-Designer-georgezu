$(window).on('load', function(){
    $('.load').remove();

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