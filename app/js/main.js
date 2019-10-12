$(function(){

   $(window).on('scroll', function (e) {
      e.preventDefault();
      var works = $('.works').offset().top;
      var html = $('html').scrollTop();
      if (works <= html){
         $('.footer__btn').addClass('scrollBtn');
      }
      else{
         $('.footer__btn').removeClass('scrollBtn');
      }
   })

   var wow = new WOW(
      {
         mobile: false,
      }
   );
   wow.init();

   $('.home-link').on('click', function () {
      var top = $('.history').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 700)
   });

   $('.about-link').on('click', function () {
      var top = $('.services').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 700)
   });

   $('.portfolio-link').on('click', function () {
      var top = $('.works').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 700)
   });

   $('.pricing-link').on('click', function () {
      var top = $('.pricing').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 700)
   });

   $('.team-link').on('click', function () {
      var top = $('.team').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 700)
   });

   $('.blog-link').on('click', function () {
      var top = $('.blog').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 700)
   });

   $('.contact-link').on('click', function () {
      var top = $('.keep').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 700)
   });

   $('.anchor').on('click', function () {
      var top = $('.advantages').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 700)
   });

   $('.footer__btn').on('click', function () {
      var top = $('.header').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 700)
   });

   

   $('.header__slider-inner').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      prevArrow: '<div class="prev-btn arrow"></div>',
      nextArrow: '<div class="next-btn arrow"></div>',
      responsive: [
         {
            breakpoint: 700,
            settings: {
               arrows: false
            }
         },
      ]
  });


   $('.services__slider').slick({
      arrows: false,
      verticalSwiping: false,
      vertical: true,
      dots: true,
      dotsClass: 'services__dots',
  });

   $('.study__slider').slick({
      arrows: false,
      dots: true,
      dotsClass: 'study__dots',
   });

   $('.burger').on('click', () => {
      $('.header__menu-list').toggleClass('active');
      $('.burger').toggleClass('active');
   })
   $('.header__menu-list a').on('click', () => {
      $('.burger').removeClass('active');
      $('.header__menu-list').removeClass('active');
   })
   $(window).on('click', (e) => {
      var menu = $('.header__menu-list');
      var burger = $('.burger');
      if(!menu.is(e.target) && !burger.is(e.target)
      && menu.hasClass('active') && burger.hasClass('active')){
         $('.burger').removeClass('active');
         $('.header__menu-list').removeClass('active');
      }
   })


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