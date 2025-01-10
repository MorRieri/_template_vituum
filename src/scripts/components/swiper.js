import Swiper from 'swiper';

/* Slider for banners */
let activateBannerSlider = ( banner_block ) => {
    let banner_wrapper = banner_block.querySelector('.block--wrapper')

    let slider_controls = document.createElement('div');
    slider_controls.classList.add('slider_controls');
    banner_wrapper.append(slider_controls);

    let swiper_nav_prev = document.createElement('div');
    swiper_nav_prev.classList.add('swiper-prev');
    slider_controls.append(swiper_nav_prev);

    let swiper_nav_next = document.createElement('div');
    swiper_nav_next.classList.add('swiper-next');
    slider_controls.append(swiper_nav_next);

    let swiper_pagination_wrapper = document.createElement('div');
    swiper_pagination_wrapper.classList.add('swiper_pagination');
    banner_wrapper.append(swiper_pagination_wrapper);

    let swiper_pagination = document.createElement('div');
    swiper_pagination.classList.add('swiper-pagination');
    swiper_pagination_wrapper.append(swiper_pagination);

    let autoHeight_setting = false;
    if ( window.matchMedia('(max-width: 992px)').matches ) {
        autoHeight_setting = true
    }


    let banner_slider = new Swiper(banner_wrapper, {
        createElements: true,
        slideClass: 'banner',
        slidesPerView: 1,
        grabCursor: false,
        simulateTouch: true,
        allowTouchMove: true,
        centeredSlides: true,
        focusableElements: 'input, select, option, textarea, button, video, label',
        effect: 'fade',
        autoplay: true,
        autoHeight: autoHeight_setting,
        fadeEffect: {
            crossFade: true
        },
        mousewheel: {
            forceToAxis: true,
        },
        navigation: {
            nextEl: swiper_nav_next,
            prevEl: swiper_nav_prev,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    });



}

let banner_slider = document.querySelectorAll('.block_banner-group');
banner_slider.forEach(bs => {
    activateBannerSlider(bs)
})