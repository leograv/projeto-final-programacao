/* global a2a*/
(function (Drupal) {
  'use strict';

  Drupal.behaviors.addToAny = {
    attach: function (context, settings) {
      // If not the full document (it's probably AJAX), and window.a2a exists
      if (context !== document && window.a2a) {
        a2a.init_all(); // Init all uninitiated AddToAny instances
      }
    }
  };

})(Drupal);
;
(function ($) {
  Drupal.behaviors.backtotop = {
    attach: function (context, settings) {
      var exist = $('#backtotop').length;
      if (exist == 0) {
        $("body", context).once('backtotop').each(function () {
          $('body').append("<button id='backtotop'>" + settings.back_to_top.back_to_top_button_text + "</button>");
        });
      }

      backToTop();
      $(window).scroll(function () {
        backToTop();
      });

      $('#backtotop', context).once('backtotop').each(function () {
        $(this).click(function () {
          $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function () {
            $('html, body').stop();
          });
          $('html,body').animate({scrollTop: 0}, 1200, 'easeOutQuart', function () {
            $("html, body").unbind("scroll mousedown DOMMouseScroll mousewheel keyup");
          });
          return false;
        });
      });

      /**
       * Hide show back to top links.
       */
      function backToTop() {
        if ($(window).scrollTop() > settings.back_to_top.back_to_top_button_trigger) {
          $('#backtotop').fadeIn();
        } else {
          $('#backtotop').fadeOut();
        }
      }
    }
  };
})(jQuery);
;
