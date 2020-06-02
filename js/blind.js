$(document).ready(function() {

  $('.blind-btn').on('click', function() {
    $('.page').toggleClass('page_blindmode');
    $('.blind').toggleClass('blind_active');
    if ($('.page').hasClass('page_brown') || $('.page').hasClass('page_blue')|| $('.page').hasClass('page_black-white') || $('.page').hasClass('page_white-black')) {
      $('.page').removeClass('page_brown page_blue page_black-white page_white-black')
    }
  });

  $('.blind__font-btn').on('click', function() {

    if ($(this).hasClass('blind__font-btn_normal')) {
      $('html').css('font-size', '62.5%')
    } else if ($(this).hasClass('blind__font-btn_bigger')) {
      $('html').css('font-size', '65%')
    } else if ($(this).hasClass('blind__font-btn_biggest')) {
      $('html').css('font-size', '72%')
    }

    $('.blind__font-btn').removeClass('blind__font-btn_active');
    $(this).addClass('blind__font-btn_active');
  });

  $('.blind__noimages').on('click', function() {
    // $(this).toggleClass('blind__noimages-btn_active');
    $(this).toggleClass('blind__noimages_active');
    $('.page').toggleClass('page_noimages');
  })

  $('.blind__colors-btn').on('click', function() {
    $('.page').removeClass('page_black-white page_blue page_white-black page_brown')
    if ($(this).hasClass('blind__colors-btn_black-white')) {
      $('.page').addClass('page_black-white');
    } else if ($(this).hasClass('blind__colors-btn_white-black')) {
      $('.page').addClass('page_white-black');
    } else if ($(this).hasClass('blind__colors-btn_blue')) {
      $('.page').addClass('page_blue');
    } else if ($(this).hasClass('blind__colors-btn_brown')) {
      $('.page').addClass('page_brown');
    }
    $('.blind__colors-btn').removeClass('blind__colors-btn_active');
    $(this).addClass('blind__colors-btn_active');
  });

})
