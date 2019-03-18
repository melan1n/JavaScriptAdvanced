$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('.slider').slick('slickAdd', "<div>First Slider</div>");
});