$(document).ready(function () {
    $('.bannner_slider_container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
    });

    new VenoBox({
        selector: '.video-links',
        spinner:'plane'
    });

    $('.testimonial_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $('.counter').counterUp();

    $('.partners_slider_container').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: `<i class="fa-sharp fa-solid fa-angle-left prevArrow"></i>`,
        nextArrow: `<i class="fa-sharp fa-solid fa-angle-right nextArrow"></i>`,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });
    AOS.init();
    new VenoBox({
        selector: '.video-links',
    });
    new VenoBox({
        selector: '.my-image-links',
    });
    $(function () {
        $.scrollUp({
            scrollSpeed: 200,
            scrollImg: true,
        });
    });
});
