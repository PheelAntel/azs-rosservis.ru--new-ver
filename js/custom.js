
// Показ или скрытие меню при нажатии на бар
$('#menuShow').click (function () {
  if ($('#mobileMenu').is(':visible'))
      $('#mobileMenu').slideUp("fast");
  else
      $('#mobileMenu').slideDown("fast");
});

// Скрытие меню при загрузке страницы
$(document).ready(function() {
  $('#mobileMenu').hide ();
});

// Scroller
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

// Slow scroll
$(document).ready(function(){
  $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });
  return false;
});

// Floating memu
$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 160) $(".col-xs-12-mobile").css({top: '0', position: 'relative'});
        else $(".col-xs-12-mobile").css({top: '0px', position: 'fixed'});
    });
});
