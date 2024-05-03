export function topSlider() {
    if (document.querySelector('.news-slider')) {
        const sliderNewsNode = document.querySelector('.news-slider');

        const sliderNews = new Swiper(sliderNewsNode, {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            autoHeight: true,

            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },

            autoplay: {
                delay: 7500,
            },
        });
    }
}