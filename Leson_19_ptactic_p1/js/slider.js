$(document).ready(function() {
	$('.future-slider').slick({

	});
  
});
$('.future-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        
      }
    },
    
    {
      breakpoint: 992,
      settings: {
        prevArrow: '<button class="prev"></button>',
        nextArrow: '<button class="next"></button>', 
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        prevArrow: '<button class="prev"></button>',
        nextArrow: '<button class="next"></button>',
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        prevArrow: '<button class="prev"></button>',
        nextArrow: '<button class="next"></button>',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },


    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.reviews-slider').slick({
  prevArrow: '<button type="button" class="rev-prev"><img src="../img/sectionReviews/bp.png" alt=""></button>',
  nextArrow: '<button type="button" class="rev-next"><img src="../img/sectionReviews/bn.png" alt=""></button>'
})
