export function header() {
    // search
    if (document.getElementById('searchBtn') && document.querySelector('.header-modal-search')) {
        const searchBtn = document.getElementById('searchBtn');
        const headerSearchModal = document.querySelector('.header-modal-search');
        const inputModalSearch = headerSearchModal.querySelector('.search__input');
        const searchFormBtn = headerSearchModal.querySelector('.search__btn');

        function toggleOpen(block, btn, removeClass) {
            if (removeClass && removeClass === true) {
                block.classList.remove('is-open');
                btn.classList.remove('is-active');
            }
            else {
                block.classList.toggle('is-open');
                btn.classList.toggle('is-active');
            }

            let topPX = document.querySelector('.header__inner').offsetHeight;
            headerSearchModal.style.top = `${topPX + 6}px`

            if (block.classList.contains('is-open')) {
                inputModalSearch.focus();
                btn.setAttribute('tabindex', 2)
                inputModalSearch.setAttribute('tabindex', 3);
                searchFormBtn.setAttribute('tabindex', 4);
            } else {
                inputModalSearch.setAttribute('tabindex', -1);
                searchFormBtn.setAttribute('tabindex', -1);
                btn.setAttribute('tabindex', '')
            }
        }

        searchBtn.addEventListener('click', () => toggleOpen(headerSearchModal, searchBtn));

        window.addEventListener('keyup', (e) => {
            if (e.keyCode === 27 || e.key === 'Escape') {
                if (headerSearchModal.classList.contains('is-open')) {
                    toggleOpen(headerSearchModal, searchBtn);
                }
            }
        });

        window.addEventListener('scroll', (e) => {
            if (window.pageYOffset >= 1000) {
                toggleOpen(headerSearchModal, searchBtn, true);
            }
        });
    }
    // dropdown
    if (document.querySelector('.header__dropdown-item-btn') && document.querySelector('.header__dropdown-content')) {
        const buttons = document.querySelectorAll('.header__dropdown-item-btn');
        const contens = document.querySelectorAll('.header__dropdown-content');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const dataId = btn.getAttribute('data-id');
                if (dataId) toggleContents(dataId, btn);
            });
        });

        function toggleContents(dataId, btn) {
            if (document.querySelector('.header__dropdown-contents-two-list')) {
                document.querySelectorAll('.header__dropdown-contents-two-list').forEach(ct => {
                    ct.classList.remove('is-open')
                });
            }
            if (document.querySelector('.header__dropdown-content')) {
                document.querySelectorAll('.header__dropdown-content').forEach(ct => {
                    ct.classList.remove('is-open')
                })
            }
            contens.forEach(ct => {
                ct.classList.remove('is-open');

                if (ct.id === dataId) {
                    ct.classList.add('is-open');
                }
            });

            buttons.forEach(bt => {
                bt.classList.remove('is-active');
            });

            btn.classList.add('is-active');
        }
    }
    // dropdown two level
    if (document.querySelector('.header__dropdown-content-item-btn') && document.querySelector('.header__dropdown-contents-two-list')) {
        const btnLevelTwo = document.querySelectorAll('.header__dropdown-content-item-btn');
        const contensLevelTwo = document.querySelectorAll('.header__dropdown-contents-two-list');

        btnLevelTwo.forEach(btn => {
            btn.addEventListener('click', () => {
                const dataIdLevelTwo = btn.getAttribute('data-two-id');
                if (dataIdLevelTwo) toggleContents(dataIdLevelTwo, btn);
            });
        });

        function toggleContents(dataId, btn) {
            contensLevelTwo.forEach(ct => {
                ct.classList.remove('is-open');

                if (ct.id === dataId) {
                    ct.classList.add('is-open');
                }
            });

            btnLevelTwo.forEach(bt => {
                bt.classList.remove('is-active');
            });

            btn.classList.add('is-active');
        }
    }
    // burger
    if (document.querySelector('.header__burger')) {
        const burgerBtnOpen = document.querySelector('.header__burger');
        const menuBurger = document.querySelector('.header__menu-mobile');

        function toggleMenuBurger() {
            menuBurger.classList.toggle('is-open');
            burgerBtnOpen.classList.toggle('is-active')

            if (document.querySelector('.header-modal-search') && document.querySelector('.search-btn')) {
                document.querySelector('.header-modal-search').classList.remove('is-open');
                document.querySelector('.search-btn').classList.remove('is-active');
            }

            if (menuBurger.classList.contains('is-open')) {
                document.querySelector('body').style.overflow = 'hidden';
                setTimeout(() => {
                    burgerBtnOpen.style.zIndex = '50'
                }, 200);
            } else {
                burgerBtnOpen.style.zIndex = '1'
                document.querySelector('body').style.overflow = '';
            }
        }

        burgerBtnOpen.addEventListener('click', () => toggleMenuBurger());
    }
}