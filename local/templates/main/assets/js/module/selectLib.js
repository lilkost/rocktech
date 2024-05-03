export function selectLoadLibs() {
    if(document.querySelector('.js-example-basic-single')) {
        $(document).ready(function() {
            $('.js-example-basic-single').select2({
                minimumResultsForSearch: '-1'
            });
        });
    }
}