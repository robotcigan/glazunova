'use strict';

$(document).ready(function () {

  var controller = new ScrollMagic.Controller();
  // let cubic = 'ease:new Ease(BezierEasing(0.25, 0.1, 0.0, 1.0)';

  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated'
  });
  wow.init();

  // Progress bar прогресс в шапке
  var progressTween = new TimelineMax().to('.header__progress', 1, {
    width: '100%'
  });

  var progressScroll = new ScrollMagic.Scene({
    triggerElement: '.page',
    triggerHook: 0,
    // duration: '100%'
    duration: $('body').height() - $(window).height()
  }).setTween(progressTween)
  // .addIndicators()
  .addTo(controller);

  // Page height fix
  // $('.page').css({
  //   'margin-bottom': $('.footer').outerHeight()
  // });


  // blind
  $('.blind-btn').on('mouseover', function () {
    $('.page').addClass('page_blind');
  });
  $('.blind-btn').on('mouseout', function () {
    $('.page').removeClass('page_blind');
  });

  // Hero scroll
  function ifNotMobile() {
    if ($(window).width() > 1200) {
      var heroTween = new TimelineMax().to('.hero__parallax', 1, {
        x: -200
      });
      var heroScroll = new ScrollMagic.Scene({
        triggerElement: '.page',
        triggerHook: 0,
        duration: $(window).height()
      }).setTween(heroTween)
      // .addIndicators()
      .addTo(controller);
    } else {
      controller.removeScene(serviceBgScroll);
    }
  }

  $(window).on('resize', function () {
    ifNotMobile();
  });

  ifNotMobile();
});