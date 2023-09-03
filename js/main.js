$(document).ready(function (){
    $('#service_carousel').owlCarousel({
        loop: true,
        margin: 15,
        items: 4,
        nav: true,
        dots: false,
        navText: ['<span class="iconify" data-icon="pepicons-pencil:angle-left"></span>','<span class="iconify" data-icon="pepicons-pencil:angle-right"></span>'],
        responsive: {
          0: {
            items: 2,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 4,
          }
        },
    });
})