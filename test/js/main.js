'use strict';

$(document).ready(function () {
  /***********************************************************************************
    *                                 Smooth Scroll
    ***********************************************************************************/
  $('a[href^="#"]').on('click', function () {

    var target = $(this).attr('href'),
        topScroll = $(target).offset().top;

    $('body, html').animate({ scrollTop: topScroll }, 1000);
    return false;
  });

  /***********************************************************************************
   *                                 Menu Gamburger
   ***********************************************************************************/
  $('.nav__gamburger').on('click', function () {
    if ($('.nav__gamburger').hasClass('nav__gamburger-active')) {
      $('.nav__gamburger').removeClass('nav__gamburger-active');
      $('.header__menu').removeClass('header__menu-active');
    } else {
      $('.nav__gamburger').addClass('nav__gamburger-active');
      $('.header__menu').addClass('header__menu-active');
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsInRhcmdldCIsImF0dHIiLCJ0b3BTY3JvbGwiLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFHQyxRQUFILEVBQWNDLEtBQWQsQ0FBb0IsWUFBVztBQUMvQjs7O0FBR0VGLElBQUUsY0FBRixFQUFrQkcsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVzs7QUFFbkMsUUFBSUMsU0FBU0osRUFBRSxJQUFGLEVBQVFLLElBQVIsQ0FBYSxNQUFiLENBQWI7QUFBQSxRQUNJQyxZQUFZTixFQUFFSSxNQUFGLEVBQVVHLE1BQVYsR0FBbUJDLEdBRG5DOztBQUdBUixNQUFFLFlBQUYsRUFBZ0JTLE9BQWhCLENBQXdCLEVBQUNDLFdBQVdKLFNBQVosRUFBeEIsRUFBZ0QsSUFBaEQ7QUFDQSxXQUFPLEtBQVA7QUFDSCxHQVBIOztBQVVGOzs7QUFHRU4sSUFBRSxpQkFBRixFQUFxQkcsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBWTtBQUM3QyxRQUFHSCxFQUFFLGlCQUFGLEVBQXFCVyxRQUFyQixDQUE4Qix1QkFBOUIsQ0FBSCxFQUEyRDtBQUMxRFgsUUFBRSxpQkFBRixFQUFxQlksV0FBckIsQ0FBaUMsdUJBQWpDO0FBQ0FaLFFBQUUsZUFBRixFQUFtQlksV0FBbkIsQ0FBK0IscUJBQS9CO0FBQ0EsS0FIRCxNQUlLO0FBQ0paLFFBQUUsaUJBQUYsRUFBcUJhLFFBQXJCLENBQThCLHVCQUE5QjtBQUNBYixRQUFFLGVBQUYsRUFBbUJhLFFBQW5CLENBQTRCLHFCQUE1QjtBQUNBO0FBQ0QsR0FUQTtBQVlELENBN0JEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU21vb3RoIFNjcm9sbFxyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICQoJ2FbaHJlZl49XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgdG9wU2Nyb2xsID0gJCh0YXJnZXQpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgJCgnYm9keSwgaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wU2Nyb2xsfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudSBHYW1idXJnZXJcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICQoJy5uYXZfX2dhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmKCQoJy5uYXZfX2dhbWJ1cmdlcicpLmhhc0NsYXNzKCduYXZfX2dhbWJ1cmdlci1hY3RpdmUnKSkge1xyXG5cdFx0XHQkKCcubmF2X19nYW1idXJnZXInKS5yZW1vdmVDbGFzcygnbmF2X19nYW1idXJnZXItYWN0aXZlJyk7XHJcblx0XHRcdCQoJy5oZWFkZXJfX21lbnUnKS5yZW1vdmVDbGFzcygnaGVhZGVyX19tZW51LWFjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdCQoJy5uYXZfX2dhbWJ1cmdlcicpLmFkZENsYXNzKCduYXZfX2dhbWJ1cmdlci1hY3RpdmUnKTtcclxuXHRcdFx0JCgnLmhlYWRlcl9fbWVudScpLmFkZENsYXNzKCdoZWFkZXJfX21lbnUtYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxufSk7Il19
