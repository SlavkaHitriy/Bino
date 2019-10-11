$(function(){


   $('.header__slider-inner').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      prevArrow: '<div class="prev-btn arrow"></div>',
      nextArrow: '<div class="next-btn arrow"></div>'
  });


   $('.services__slider').slick({
      arrows: false,
      verticalSwiping: true,
      vertical: true,
      dots: true,
      dotsClass: 'services__dots',
  });


});