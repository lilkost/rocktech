export function downloadAccordion() {
    if (document.querySelector('.downlad-accordion__top-btn') && document.querySelector('.downlad-accordion__elem')) {
        const buttons = document.querySelectorAll('.downlad-accordion__top-btn');
        const accordionElements = document.querySelectorAll('.downlad-accordion__elem');

        function toggleAccordion(idBtn, button) {
            buttons.forEach(btn => {
                btn.classList.remove('is-active')
            });

            button.classList.add('is-active');

            accordionElements.forEach(item => {
                item.classList.add('is-hidden');
                const idEl = item.id;

                const linksAll = item.querySelectorAll('a');

                linksAll.forEach(link => {
                    link.setAttribute('tabindex', '-1');
                })

                if (idEl === idBtn) {
                    item.classList.remove('is-hidden');
                    const linksCur = item.querySelectorAll('a');

                    linksCur.forEach(link => {
                        link.setAttribute('tabindex', '');
                    })
                };
            });
        }

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                toggleAccordion(id, btn);
            })
        });
    }
}