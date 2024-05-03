export function accordion() {
    function accordionToggleOpen(item, button) {
        button.addEventListener('click', () => {
            item.classList.toggle('is-open');
        });
    }

    if (document.querySelector('.accordion')) {
        const accordions = document.querySelectorAll('.accordion');

        accordions.forEach(item => {
            const itemBtnOpen = item.querySelector('.accordion__top-arrow');
            accordionToggleOpen(item, itemBtnOpen);
        });
    }
}