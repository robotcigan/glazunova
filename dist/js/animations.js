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

  $(window).on('resize', function () {
    ifNotMobile();
  });

  ifNotMobile();

  // index page prems animation
  function premInterval() {
    var current = $('.prem_animate .prem__title_active');
    var index = current.index();
    if (index < 2) {
      current.next().addClass('prem__title_active');
      current.removeClass('prem__title_active');
      $('.prem_animate .prem__progress-bar').css('top', 33 * (index + 1) + '%');
    } else {
      $('.prem_animate .prem__title_active').removeClass('prem__title_active');
      $('.prem_animate .prem__title').eq(0).addClass('prem__title_active');
      $('.prem_animate .prem__progress-bar').css('top', 0);
    }
  }

  setInterval(premInterval, 2000);

  // $('form-control').

});