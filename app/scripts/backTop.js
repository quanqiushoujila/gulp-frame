/*
* @Author: kk
* @Date:   2017-03-01 15:01:12
* @Last Modified by:   kk
* @Last Modified time: 2017-03-02 08:46:52
*/

$(function () {
  $(window).scroll(function () {
    var sc = $(window).scrollTop();

    if (sc > 100) {
      $('.up-mian').css('display', 'block');
    } else {
      $('.up-mian').css('display', 'none');
    }
  });
  $('.up-mian').click(function () {
    var sc = $(window).scrollTop();

    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });
});
