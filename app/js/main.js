// const { on } = require("gulp");

$(function(){

  $('.slider-items').slick({
      slidesToShow: 4,
  slidesToScroll: 2,
  nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow-next.svg" alt="next arrow"></button>',
  prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow-prev.svg" alt="prev arrow"></button>',
  });

  $('.product-tabs__item').on('click', function (e) {
    
e.preventDefault();
$('.product-tabs__item').removeClass('product-tabs__item--active');
$(this).addClass('product-tabs__item--active');


$('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
$($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.shop-product__num').styler({});

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
      fade: true,
        slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "7px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>'
  });
    $(".star-big").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "14px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>'
  });

    $(".filter-price__input").ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data) {
      $('.filter-price__min').text(data.from);
      $('.filter-price__max').text(data.to);
      },
      onChange: function (data) {
          $('.filter-price__min').text(data.from);
          $('.filter-price__max').text(data.to);
        },
    });


  var mixer1 = mixitup('.products__items');
});