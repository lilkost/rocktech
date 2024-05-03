export function starsView() {
    if (document.querySelector('.card__reiting-stars')) {
        const starsParent = document.querySelectorAll('.card__reiting-stars');

        starsParent.forEach(parent => {
            const count = parent.getAttribute('data-stars');
            const stars = parent.querySelectorAll("svg");

            stars.forEach((st, key) => {
                if (key < count) {
                    st.style.display = 'block';
                }
            });

        })
    }
}