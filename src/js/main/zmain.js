// (function($) {
//   // Ensures the DOM is fully loaded
//   $(document).ready(function() {
//     // Randomize background image
//     const log = console.log,
//           array = ["assets/img/hero_img/1.jpg", "assets/img/hero_img/2.jpg", "assets/img/hero_img/3.jpg", "assets/img/hero_img/4.jpg",  "assets/img/hero_img/5.jpg", "assets/img/hero_img/6.jpg", "assets/img/hero_img/7.jpg"],
//           target = document.getElementById("target"), // Make sure 'target' is the correct ID of your image element
//           lastSrc = sessionStorage.lastSrc || target.src; // Using .src ensures we get the absolute URL which matches what's set via .src
    
//     let random, newSrc = lastSrc;
//     do {
//       random = Math.floor(Math.random() * array.length);
//       newSrc = array[random];
//     } while (newSrc === lastSrc);
    
//     target.src = sessionStorage.lastSrc = newSrc; // Set the new source to the image and save it to sessionStorage
//     log(target); // Log the target to console for debugging
//   });
// })(jQuery);

(function($) {
  $(document).ready(function() {
    const target = document.getElementById("target");
    if (!target) return; // IMPORTANT: prevents errors on non-home pages

    const images = [
      "assets/img/hero_img/1.jpg",
      "assets/img/hero_img/2.jpg",
      "assets/img/hero_img/3.jpg",
      "assets/img/hero_img/4.jpg",
      "assets/img/hero_img/5.jpg",
      "assets/img/hero_img/6.jpg",
      "assets/img/hero_img/7.jpg",
    ];

    // Avoid showing the same image twice in a row across refreshes
    const key = "hero_last_src";
    const last = localStorage.getItem(key);

    let next = last;
    while (next === last) {
      next = images[Math.floor(Math.random() * images.length)];
    }

    target.src = next;
    localStorage.setItem(key, next);
  });
})(jQuery);


(function( $, window, undefined ) {
  // Menu
  $("#menu").click(function() {
    $("body").addClass("push-menu-to-right");
    $("#sidebar").addClass("open");
    $(".overlay").addClass("show");
  });

  $("#mask").click(function() {
    $("body").removeClass("push-menu-to-right");
    $("#sidebar").removeClass("open");
    $(".overlay").removeClass("show");
  });

  // Header
  $(window).scroll(function () {
    var top = $(this).scrollTop();
    if (top > 0) {
      $("body").addClass("light");
    }
    else {
      $("body").removeClass("light");
    }
  });


  // Modals

  var $closeBtn = $('.modal .close');
  $closeBtn.on('click', function() {
      $closeBtn.parent().parent().addClass('closed');
  });

  var $exitModal = $('.modal.exit');
  if ($exitModal.length) {
    ouibounce($exitModal[0], {
      aggressive: true,
      callback: function() {
        $exitModal.find('.close').on('click', function() {
          $exitModal.hide();
        });
      }
    });
  }

  // Search
  var bs = {
    close: $(".icon-remove-sign"),
    searchform: $(".search-form"),
    canvas: $("body"),
    dothis: $('.dosearch')
  };

  bs.dothis.on('click', function() {
    $('.search-wrapper').toggleClass('active');
    bs.searchform.toggleClass('active');
    bs.searchform.find('input').focus();
    bs.canvas.toggleClass('search-overlay');
    $('.search-field').simpleJekyllSearch();
  });

  function close_search() {
    $('.search-wrapper').toggleClass('active');
    bs.searchform.toggleClass('active');
    bs.canvas.removeClass('search-overlay');
  }

  bs.close.on('click', close_search);

  // Closing menu with ESC
  document.addEventListener('keyup', function(e){
      if(e.keyCode == 27 && $('.search-overlay').length) {
          close_search();
      }
  });
  
  if (document.getElementsByClassName('home').length >=1 ) {
      new AnimOnScroll( document.getElementById( 'grid' ), {
        minDuration : 0.4,
        maxDuration : 0.7,
        viewportFactor : 0.2
      });
  }

  // Init smooth scroll
  smoothScroll.init({
      selectorHeader: '.bar-header', // Selector for fixed headers (must be a valid CSS selector)
      speed: 500, // Integer. How fast to complete the scroll in milliseconds
      updateURL: false // Boolean. Whether or not to update the URL with the anchor hash on scroll
  });

})( Zepto, window );



