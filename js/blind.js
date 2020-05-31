$(document).ready(function() {

  $('.blind__font-btn').on('click', function() {

    if ($(this).hasClass('blind__font-btn_normal')) {
      $('html').css('font-size', '62.5%')
    } else if ($(this).hasClass('blind__font-btn_bigger')) {
      $('html').css('font-size', '72.5%')
    } else if ($(this).hasClass('blind__font-btn_biggest')) {
      $('html').css('font-size', '82.5%')
    }

    $('.blind__font-btn').removeClass('blind__font-btn_active');
    $(this).addClass('blind__font-btn_active');
  });

  $('.blind__noimages-btn').on('click', function() {
    $(this).toggleClass('blind__noimages-btn_active');
    $('.page').toggleClass('page_blindmode');
  })

  $('.blind__colors-btn').on('click', function() {
    if ($(this).hasClass('blind__colors-btn_black-white')) {
      $('.page').addClass('page_black-white');
    } else if ($(this).hasClass('blind__colors-btn_blue')) {
      $('.page').addClass('page_blue');
    }
  })

})
