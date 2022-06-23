const LoadingInterval = setInterval(Loading, 100)
let loadingNumber = 0;
function Loading(){
    loadingNumber += 1;
    if(loadingNumber > 9) {
        $('.loading__img').attr('src', `./../img/loading/Intro_000${loadingNumber}.png`)
        if(loadingNumber == 24){
            clearInterval(LoadingInterval);
            coverImage()
            $('.avatar__cover').addClass('active')
            $('.loading').remove();
        }
    }else {
        $('.loading__img').attr('src', `./../img/loading/Intro_0000${loadingNumber}.png`)
    }
}
Loading();

let coverNumber = 107;
function coverImage(){
    console.log(coverNumber)
    coverNumber += 1;
    if(coverNumber == 213){
        coverNumber = 107;
    }
    if( $('.menu__item--text').hasClass('glitch') ){
        $('.avatar__cover').attr('src', `./../img/Work_Idle/Work_Idle_00${coverNumber}.png`)
    }else {
        $('.avatar__cover').attr('src', `./../img/idle/Idle_00${coverNumber}.png`)
    }
}

const coverInterval = setInterval(coverImage, 100) 

$('.menu__item--text').on("mouseenter", function(){
    
})












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
