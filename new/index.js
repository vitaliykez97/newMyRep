let pageSlider = new Swiper('.page', {
    wrapperClass: "page_wrapper",
    slideClass: "page_screen",

    direction: "vertical",

    slidesPerView: 'auto',

    parallax: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,

    speed: 800,

    observeParents: true,

    observeSlideChildren: true,
    
    pagination: {
        el:'.pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'pagination_bullet',
        bulletActiveClass: 'pagination_bullet_active'
    },

    init: false,

    on: {
        init: function (){
            
        },
    
        slideChange: function(){
            menuSliderRemove()
            menuLinks[pageSlider.realIndex].classList.add('_active')
        },
    },
})


let menuLinks = document.querySelectorAll('.header_li')

function menuSlider(){
    if ( menuLinks.length > 0){
        menuLinks[pageSlider.realIndex].classList.add('_active')
        for (let i = 0; i < menuLinks.length; i++){
            const menuLink = menuLinks[i]
            menuLink.addEventListener("click", function (e){
                menuSliderRemove()
                pageSlider.slideTo(i, 800)
                menuLink.classList.add('_active')
                e.preventDefault()
            })
        }
    }
}

window.onload = menuSlider()

function menuSliderRemove(){
    let menuLinkActive = document.querySelector('.header_li._active')
    if (menuLinkActive){
        menuLinkActive.classList.remove('_active')
    }
}

pageSlider.init()