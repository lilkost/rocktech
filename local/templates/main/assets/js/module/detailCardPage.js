export function detailPage() {
    if (document.querySelector('.prodcut-detail__slider-min') && document.querySelector('.prodcut-detail__slider-big')) {
        const sliderMinNode = document.querySelector('.prodcut-detail__slider-min');
        const sliderBigNode = document.querySelector('.prodcut-detail__slider-big');

        const sliderMin = new Swiper(sliderMinNode, {
            direction: 'vertical',
            loop: false,
            spaceBetween: 10,
            slidesPerView: 8,
            freeMode: true,
            watchSlidesProgress: true,

            breakpoints: {
                993: {
                    direction: 'vertical',
                },
                992: {
                    direction: 'horizontal',
                    slidesPerView: 8,
                },
                376: {
                    slidesPerView: 8,
                    direction: 'horizontal',
                },
                375: {
                    slidesPerView: 6,
                    direction: 'horizontal',
                },
                280: {
                    direction: 'horizontal',
                    slidesPerView: 6,
                },
            }
        });

        const sliderBig = new Swiper(sliderBigNode, {
            direction: 'vertical',
            spaceBetween: 10,
            slidesPerView: 1,
            loop: false,

            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },

            thumbs: {
                swiper: sliderMin,
            },
        });
    }

    if (document.querySelector('.optionally-purchased__slider')) {
        const sliderOptionallyPurchased = document.querySelector('.optionally-purchased__slider');

        const swiper = new Swiper(sliderOptionallyPurchased, {
            direction: 'horizontal',
            loop: false,
            spaceBetween: 30,
            slidesPerView: 5,
            breakpoints: {
                1341: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                1340: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1300: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                },
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                850: {
                    slidesPerView: 2.5,
                    spaceBetween: 25,
                },
                568: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                400: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                },
                280: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            }
        });
    }

    if (document.querySelector('.prodcut-detail__properties')) {
        const accordions = document.querySelectorAll('.prodcut-detail__properties');

        function toggleAccordionOpen(accordion, btn) {
            accordion.classList.toggle('is-open');
            btn.classList.toggle('is-active');
        }

        accordions.forEach(accordion => {
            const btnOpen = accordion.querySelector('.prodcut-detail__accordion-btn-open');
            btnOpen.addEventListener('click', () => toggleAccordionOpen(accordion, btnOpen))
        });
    }

    if (document.querySelector('.qr-modal')) {
        const qrModal = document.getElementById('qrModal');
        const qrModalImage = document.getElementById('qrModalImage');
        const qrModalClose = document.getElementById('qrModalClose');
        const qrBtnOpen = document.getElementById('qrBtn');
        const qrImage = document.getElementById('qrImage');

        function openModal() {
            qrModal.classList.toggle('is-open');

            if (qrModal.classList.contains('is-open')) {
                const src = qrImage.src;
                qrModalImage.src = src;
            }
        }

        qrBtnOpen.addEventListener('click', () => openModal());
        qrModalClose.addEventListener('click', () => openModal());

        window.addEventListener('click', (e) => {
            if (e.target === qrModal) {
                openModal();
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 27 || e.code === 'Escape' || e.key === 'Escape') {
                openModal();
            }
        });
    }
}