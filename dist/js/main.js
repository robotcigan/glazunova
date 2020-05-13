'use strict';

$(document).ready(function () {

  // burger
  $('.burger').on('click', function () {
    $(this).toggleClass('burger_active');
    $('.mobile-menu').slideToggle();
    $('.mobile-menu').toggleClass('mobile-menu_active');
    $('.logo').toggleClass('logo_white');
    $('.header').toggleClass('header_mobile-menu-open');
  });

  $('.mobile-menu-accordion').on('click', function () {
    $(this).find('.mobile-menu__link-container').slideToggle();
    $(this).find('.mobile-menu__link_big').toggleClass('mobile-menu__link_big_active');
  });

  // модалки
  $('.modal-open').fancybox({
    touch: false
  });

  // selects
  $('.custom-select').niceSelect();

  // Телефон маска
  if ($('.phone-mask').length) {
    $('.phone-mask').inputmask({
      mask: "+7 (999) 999 99 99",
      showMask: true
    });
  }

  // Sticky button
  function stickyBtn() {
    if (!$('.sticky-btn').hasClass('sticky-btn_index') && $(window).scrollTop() > 1) {
      $('.sticky-btn').addClass('sticky-btn_scroll');
    } else {
      $('.sticky-btn').removeClass('sticky-btn_scroll');
    }
  }
  $(window).scroll(function () {
    stickyBtn();
  });

  stickyBtn();

  // Slider/carousel
  var swiper = new Swiper('.slider .swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.slider__control_right',
      prevEl: '.slider__control_left'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  // about slider

  var aboutSliderInterval = void 0;
  if ($('.quote-slider').length) {
    aboutSliderInterval = setInterval(function () {
      aboutSliderNext();
    }, 4500);
  }

  function aboutSliderNext() {
    var quoteIndex = $('.quote_active').index();
    var quoteCount = $('.quote-slider .quote').length;

    if (quoteIndex < quoteCount - 1) {
      $('.quote-slider .quote').removeClass('quote_active');
      $('.quote-slider .quote').removeAttr("style");
      $('.quote-slider .quote').eq(quoteIndex + 1).css({
        'transform': 'translateX(-' + (quoteIndex + 1) * 100 + '%)'
      });
      $('.quote-slider .quote').eq(quoteIndex + 1).addClass('quote_active');
    } else {
      $('.quote-slider .quote').removeClass('quote_active');
      $('.quote-slider .quote').eq(0).addClass('quote_active');
    }
  }

  $('.quote-slider .quote__next').on('click', function () {
    aboutSliderNext();
    clearInterval(aboutSliderInterval);
    aboutSliderInterval = setInterval(function () {
      aboutSliderNext();
    }, 4500);
  });

  // Tabs
  $('.tabs__link').on('click', function () {
    $(this).closest('.tabs').find('.tabs__link').removeClass('tabs__link_active');
    $(this).addClass('tabs__link_active');
    var index = $(this).index();
    $(this).closest('.tabs').find('.tabs__content').removeClass('tabs__content_active');
    $(this).closest('.tabs').find('.tabs__content').eq(index).addClass('tabs__content_active');
  });

  // Long h1
  if ($('h1').length && $('h1').text().length > 40) {
    $('h1').addClass('h1_long');
  }

  // Кастомный курсор
  var cursorHoverAnimationList = '.document, .slider, .slider-scroll .swiper-slide';

  var cursor = $('.cursor');
  $(cursorHoverAnimationList).on('mouseenter', function () {
    $(window).on('mousemove', function (e) {
      $('.cursor').css({
        transform: 'translate3d(' + (e.clientX - 4) + 'px, ' + (e.clientY - 4) + 'px, 0)'
      });
    });
  });
  $(cursorHoverAnimationList).on('mouseleave', function () {
    $(window).off('mousemove');
    cursor.removeClass('cursor_active');
  });

  $('.document, .slider-scroll .swiper-slide').on('mouseenter', function () {
    cursor.addClass('cursor_active');
  });
  $('.document, .slider-scroll .swiper-slide').on('mouseleave', function () {
    cursor.removeClass('cursor_active');
  });

  $('.slider__control_left').on('mouseenter', function () {
    cursor.addClass('cursor_swiper cursor_swiper-left');
  });
  $('.slider__control_left').on('mouseleave', function () {
    cursor.removeClass('cursor_swiper cursor_swiper-left');
  });

  $('.slider__control_right').on('mouseenter', function () {
    cursor.addClass('cursor_swiper cursor_swiper-right');
  });
  $('.slider__control_right').on('mouseleave', function () {
    cursor.removeClass('cursor_swiper cursor_swiper-right');
  });

  // Кнопки
  $('.btn').each(function () {
    $(this).find('.btn__text').clone().appendTo($(this));
  });

  // faq
  $('.faq-link').on('click', function () {
    var index = $(this).index();
    $('.faqs').removeClass('faqs_active');
    $('.faqs').eq(index).addClass('faqs_active');
    $('.faq-link').removeClass('faq-link_active');
    $(this).addClass('faq-link_active');
  });

  $('.faq__top').on('click', function () {
    // $('.faq').not(this).removeClass('faq_active');
    // $('.faq .faq__text').slideUp();
    $(this).closest('.faq').toggleClass('faq_active');
    $(this).closest('.faq').find('.faq__text').stop().slideToggle();
  });

  // SVG magic
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });
});