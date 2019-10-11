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

   $('.study__slider').slick({
      arrows: false,
      dots: true,
      dotsClass: 'study__dots',
   });


   $('.works__wrapper .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.works__wrapper').find('.tab-item').removeClass('active-tab').hide();
      $('.works__wrapper .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });


   var mixer = mixitup('.works__content');

});