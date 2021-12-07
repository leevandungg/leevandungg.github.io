$(".product-list").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fas fa-arrow-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><i class="fas fa-arrow-right"></i></button>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            },
        },
    ],
});