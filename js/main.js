$(document).ready(function (){
    $('.service_carousel').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        responsive: {
          0: {
            items: 2,
            nav: true,
          },
          600: {
            items: 3,
            nav: false,
          },
          1000: {
            items: 4,
            nav: true,
            loop: false,
          },
        },
    });
})