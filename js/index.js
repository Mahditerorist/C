jQuery('.owl-slider').owlCarousel({
    rtl:true,
    loop:true,
    margin:5,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


jQuery(function () {
    jQuery('[data-toggle="tooltip"]').tooltip()
});