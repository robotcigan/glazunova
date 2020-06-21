$(document).ready(function() {

  // burger
  $('.burger').on('click', function() {
    // $(this).toggleClass('burger_active');
    $('.mobile-menu').toggleClass('mobile-menu_active');
    $('.page').addClass('page_mobile-menu-open');
    $('body').addClass('mobile-menu-open');
    $('.sticky-btn').addClass('sticky-btn_mobile-menu-open');
    // $('.header').toggleClass('header_mobile-menu-open');
  });

  // mobile menu close
  $('.mobile-menu__close').on('click', function() {
    // alert('some')
    $('.mobile-menu').removeClass('mobile-menu_active');
    $('.page').removeClass('page_mobile-menu-open');
    $('body').removeClass('mobile-menu-open');
    $('.sticky-btn').removeClass('sticky-btn_mobile-menu-open');
  });


  // модалки
  $('.modal-open, [data-fancybox]').fancybox({
    touch: false
  });


  // selects
  $('.custom-select').niceSelect();

  // Телефон маска
  if ( $('.phone-mask').length ) {
    $('.phone-mask').inputmask({
      mask: "+7 (999) 999 99 99",
      showMask: true
    });
  }

  // Date picker
  let disabledDates = $('.datepicker').data('flatpickr-disabled');

  if ($('.datepicker').length) {
    $('.datepicker').flatpickr({
      dateFormat: 'd.m.Y',
      altInput: true,
      locale: 'ru',
      minDate: 'today',
      disable: disabledDates.split(',')
    });
  }


  
  // Dropdowns
  $('.dropdown__nav-link').on('mouseenter', function() {
    let index = $(this).index();
    $('.dropdown__nav-link').removeClass('dropdown__nav-link_active');
    $(this).addClass('dropdown__nav-link_active');
    $('.dropdown__specialists').removeClass('dropdown__specialists_active');
    $('.dropdown__specialists').eq(index).addClass('dropdown__specialists_active');
  })


  // hero
  let heroContainer = $('.hero__container').clone();
  $('.hero__parallax').append(heroContainer);

  // about effect
  let aboutItems = $('.effect__column').clone();
  $('.effect__wrapper').append(aboutItems);

  // Sticky button
  function stickyBtn() {
    if (!$('.sticky-btn').hasClass('sticky-btn_index') && ($(window).scrollTop() > 1)) {
      $('.sticky-btn').addClass('sticky-btn_scroll');
    } else {
      $('.sticky-btn').removeClass('sticky-btn_scroll');
    }
  }
  $(window).scroll(function () {
    stickyBtn();
  })

  stickyBtn()

  // Slider/carousel
  let swiper = new Swiper('.slider .swiper-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      },
      1440: {
        slidesPerView: 4
      }
    }
  });

  // about slider
  let aboutSliderInterval;
  if ($('.quote-slider').length) {
    aboutSliderInterval = setInterval(() => { aboutSliderNext() }, 4500);
  }

  function aboutSliderNext() {
    let quoteIndex = $('.quote_active').index();
    let quoteCount = $('.quote-slider .quote').length;

    if (quoteIndex < quoteCount - 1) {
      $('.quote-slider .quote').removeClass('quote_active');
      $('.quote-slider .quote').removeAttr("style");
      $('.quote-slider .quote').eq(quoteIndex + 1).css({
        'transform': `translateX(-${(quoteIndex + 1) * 100 }%)`
      });
      $('.quote-slider .quote').eq(quoteIndex + 1).addClass('quote_active');
    } else {
      $('.quote-slider .quote').removeClass('quote_active');
      $('.quote-slider .quote').eq(0).addClass('quote_active');
    }
  }

  $('.quote-slider .quote__next').on('click', function() {
    aboutSliderNext();
    clearInterval(aboutSliderInterval);
    aboutSliderInterval = setInterval(() => { aboutSliderNext() }, 4500)
  });


  // Tabs
  $('.tabs__link').on('click', function () {
    $(this).closest('.tabs').find('.tabs__link').removeClass('tabs__link_active');
    $(this).addClass('tabs__link_active');
    let index = $(this).index();
    $(this).closest('.tabs').find('.tabs__content').removeClass('tabs__content_active');
    $(this).closest('.tabs').find('.tabs__content').eq(index).addClass('tabs__content_active');
  });

  // Long h1
  if ($('h1').length && $('h1').text().length > 40) {
    $('h1').addClass('h1_long');
  }


  // Кастомный курсор
  // let cursorHoverAnimationList = '.document, .slider, .slider-scroll .swiper-slide';

  // let cursor = $('.cursor')
  // $(cursorHoverAnimationList).on('mouseenter', () => {
  //   $(window).on('mousemove', (e) => {
  //     $('.cursor').css({
  //       transform: `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`
  //     });
  //   })
  // });
  // $(cursorHoverAnimationList).on('mouseleave', () => {
  //   $(window).off('mousemove');
  //   cursor.removeClass('cursor_active');
  // });

  // $('.document, .slider-scroll .swiper-slide').on('mouseenter', () => {
  //   cursor.addClass('cursor_active');
  // });
  // $('.document, .slider-scroll .swiper-slide').on('mouseleave', () => {
  //   cursor.removeClass('cursor_active');
  // });

  // $('.slider__control_left').on('mouseenter', () => {
  //   cursor.addClass('cursor_swiper cursor_swiper-left');
  // });
  // $('.slider__control_left').on('mouseleave', () => {
  //   cursor.removeClass('cursor_swiper cursor_swiper-left');
  // });

  // $('.slider__control_right').on('mouseenter', () => {
  //   cursor.addClass('cursor_swiper cursor_swiper-right');
  // });
  // $('.slider__control_right').on('mouseleave', () => {
  //   cursor.removeClass('cursor_swiper cursor_swiper-right');
  // });

  // Уведомление
  $('.header__notice-close').on('click', function() {
    $('.header__notice').removeClass('header__notice_active');
  })

  // Поиск
  $('.header__search').on('click', function() {
    $('.search').addClass('search_active');
    $('.search__input').focus();
  });

  $('.search__close').on('click', function() {
    $('.search').removeClass('search_active');
  })

  // search close on click on area
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.search').length && !$(event.target).closest('.header__search').length) {
      $('.search').removeClass('search_active');
      // $('.page-wrapper').removeClass('page-wrapper--shadow');
    }
  });



  // Кнопки
  $('.btn').each(function() {
    $(this).find('.btn__text').clone().appendTo($(this));
  });


  // faq
  $('.faq-link').on('click', function() {
    let index = $(this).index();
    $('.faqs').removeClass('faqs_active');
    $('.faqs').eq(index).addClass('faqs_active');
    $('.faq-link').removeClass('faq-link_active');
    $(this).addClass('faq-link_active');
  })

  $('.faq__top').on('click', function() {
    // $('.faq').not(this).removeClass('faq_active');
    // $('.faq .faq__text').slideUp();
    $(this).closest('.faq').toggleClass('faq_active');
    $(this).closest('.faq').find('.faq__text').stop().slideToggle();
  });

  // SVG magic
  jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });

})







