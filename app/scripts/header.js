/*
* @Author: kk
* @Date:   2017-03-02 08:47:03
* @Last Modified by:   kk
* @Last Modified time: 2017-03-03 16:49:59
*/

'use strict';

$(function() {
  $("img").lazyload({effect: "fadeIn"});
  $(window).on('resize', function() {
    var fixedWidth = 992;
    var width = $(window).width();
    console.log(width);
    if (fixedWidth < width) {
      $('body').removeClass('oh');
      $('.phone-nav').hide();
    }
  });

  $('.btn-bar').on('click', function() {
    $('.consult ul').hide();
    $('.phone-nav').fadeToggle(300, function() {
      $('.phone-sub-nav').hide();
      $('body').toggleClass('oh');
    });
  });

  $('.bg-grey').on('click', function() {
    $('.phone-nav').fadeOut(300, function() {
      $('.phone-sub-nav').hide();
      $('body').removeClass('oh');
    });
  })

  $('.btn-consult').on('click', function() {
    $('.phone-nav').hide();
    $('body').removeClass('oh');
    $(this).next().fadeToggle(300)
  });
  $('.btn-consult, .consult ul').on('blur', function() {
    $('.phone-nav').hide();
    $('body').removeClass('oh');
    $('.consult ul').fadeOut(300);
  });

  $('.phone-nav .phone-nav-item').on('click', function(event) {
    event = event || e;
    var subNav = $(this).find('.phone-sub-nav');
    var is = $(this).is(function() {
      return $('.phone-sub-nav', this).length;
    });

    if (is) {
      $('.phone-sub-nav', this).slideToggle(300).parent().siblings().find('.phone-sub-nav').slideUp(300);
    }
    // $('body').removeClass('oh');
    event.stopPropagation();
  });
  $('.phone-sub-nav a').on('click', function(event) {
    $(this).parent().show();
    event.stopPropagation();
  });

  (function(document, window, undefined) {
    var scroll = {
      oldTop: 300,
      newTop: 300,
      top: 300,
      hideHeaderTop: 200
    };

    var main = $('.main');
    var header = $('.header')

    $(window).on('scroll', function() {
      $('.consult ul').hide();
      if ($(window).scrollTop() > scroll.top) {
        header.removeClass('header-0').addClass('header-80');
        main.addClass('main-80');
        scroll.newTop = $(window).scrollTop();
        if(scroll.newTop < scroll.oldTop) {
          header.removeClass('header-animate-80').addClass('header-animate-0');
        } else {
          header.removeClass('header-animate-0').addClass('header-animate-80');
        }
        scroll.oldTop = scroll.newTop;
      } else if ($(window).scrollTop() < scroll.top && $(window).scrollTop() > scroll.hideHeaderTop) {
        header.addClass('header-animate-80');
        var timer;
        clearTimeout(timer);
        timer = setTimeout(function() {
          header.removeClass('header-80 header-animate-0 header-animate-80');
        }, 300);
      } else {
        // header.addClass('header-animate-80');
        // var timer;
        // clearTimeout(timer);
        // timer = setTimeout(function() {
        //   header.removeClass('header-80 header-animate-0 header-animate-80');
        // }, 300);
        header.removeClass('header-80 header-animate-0 header-animate-80');
        main.removeClass('main-80');
      }
      
    });
  })(document, window);
});