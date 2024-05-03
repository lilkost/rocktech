export function effectGoPage() {
    barba.init(
        {
            transitions: [{
                name: 'opacity-transition',
                leave(data) {
                    if (document.getElementById('searchBtn') && document.querySelector('.header-modal-search')) {
                        document.getElementById('searchBtn').classList.remove('is-active');
                        document.querySelector('.header-modal-search').classList.remove('is-open')
                    }
                    if (document.querySelector('.header__menu-mobile') && document.querySelector('.header__burger')) {
                        document.querySelector('.header__menu-mobile').classList.remove('is-open');
                        document.querySelector('.header__burger').classList.remove('is-active')
                        document.querySelector('body').style.overflow = ''
                    }
                    return gsap.to(data.current.container, {
                        opacity: 0,
                        filter: 'blur(10px)',
                        top: '100px'
                    });
                },
                enter(data) {
                    if (document.getElementById('searchBtn') && document.querySelector('.header-modal-search')) {
                        document.getElementById('searchBtn').classList.remove('is-active');
                        document.querySelector('.header-modal-search').classList.remove('is-open')
                    }
                    if (document.querySelector('.header__menu-mobile') && document.querySelector('.header__burger')) {
                        document.querySelector('.header__menu-mobile').classList.remove('is-open');
                        document.querySelector('.header__burger').classList.remove('is-active');
                        document.querySelector('body').style.overflow = ''
                    }
                    return gsap.from(data.next.container, {
                        opacity: 0,
                        filter: 'blur(10px)',
                        top: '100px'
                    });
                }
            }]
        }
    );
}