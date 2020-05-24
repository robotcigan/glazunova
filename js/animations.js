$(document).ready(function() {


  let controller = new ScrollMagic.Controller();
  // let cubic = 'ease:new Ease(BezierEasing(0.25, 0.1, 0.0, 1.0)';

  let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated'
  });
  wow.init();



  // Progress bar прогресс в шапке
  let progressTween = new TimelineMax()
    .to('.header__progress', 1, {
      width: '100%'
    });

  let progressScroll = new ScrollMagic.Scene({
    triggerElement: '.page',
    triggerHook: 0,
    // duration: '100%'
    duration: $('body').height() - $(window).height()
  })
  .setTween(progressTween)
  // .addIndicators()
  .addTo(controller);


  // Page height fix
  // $('.page').css({
  //   'margin-bottom': $('.footer').outerHeight()
  // });

  
  // blind
  $('.header__blind').on('mouseover', function() {
    $('.page').addClass('page_blind');
  });
  $('.header__blind').on('mouseout', function() {
    $('.page').removeClass('page_blind');
  });

  // Hero scroll
  let heroTween = new TimelineMax()
    .to('.hero__parallax', 1, {
      x: -200
    });

  let heroScroll = new ScrollMagic.Scene({
    triggerElement: '.page',
    triggerHook: 0,
    duration: $(window).height()
  })
  .setTween(heroTween)
  // .addIndicators()
  .addTo(controller);













});









