export function catalogAsideOpen() {
    if (document.querySelector('.catalog__filter-btn') && document.querySelector('.catalog__aside') && document.querySelector('.catalog__filter-close')) {
        const btnFilterOpen = document.querySelector('.catalog__filter-btn');
        const filter = document.querySelector('.catalog__aside');
        const btnFilterClose = document.querySelector('.catalog__filter-close');

        function toggleAsideOpen() {
            filter.classList.toggle('is-open');

            if (filter.classList.contains('is-open')) {
                document.querySelector('body').style.overflow = 'hidden';
            } else {
                document.querySelector('body').style.overflow = '';
            }
        }

        btnFilterOpen.addEventListener('click', () => toggleAsideOpen());
        btnFilterClose.addEventListener('click', () => toggleAsideOpen());
    }
}

export function removeCheckedFilterInput() {
    if (document.querySelector('.catalog__filter')) {
        const btnRemoveChecked = document.querySelector('.catalog__btn-reset');
        const formNode = document.querySelector('.catalog__filter');
        const allInputs = formNode.querySelectorAll('input[type="checkbox"');

        function removeCheckedInput() {
            allInputs.forEach(input=> {
                if(input.checked) {
                    input.checked = false;
                }
            });
        }

        btnRemoveChecked.addEventListener('click', ()=> removeCheckedInput());
    }
}