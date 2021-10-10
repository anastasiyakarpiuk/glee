$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var mixer1 = mixitup('.products__items');
  // var mixer2 = mixitup('.categories__items');

  // $('#Container').mixItUp({
  //   selectors: {
  //     filter: '.products__btn'
  //   }
  // });

  // $('#Container2').mixItUp({
  //   selectors: {
  //     filter: '.categories__btn'
  //   }
  // });


  //   $('.partners__inner').slick({
  //   dots: false,
  //   arrows: false,
  //   infinite: false,
  //   // fade: true,
  //   speed: 300,
  //   slidesToShow: 5,
  //   // slidesToScroll: 4,
  // });
});