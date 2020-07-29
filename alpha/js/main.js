jQuery(document).ready(function ($) {
  //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
  var $L = 1200,
    $menu_navigation = $('#main-nav'),
    $cart_trigger = $('#cd-cart-trigger'),
    $hamburger_icon = $('#cd-hamburger-menu'),
    $lateral_cart = $('#cd-cart'),
    $shadow_layer = $('#cd-shadow-layer');
  $cartclose = $('.cd-cart-close');
  $navlink = $('.nav-links li')

  //open lateral menu on mobile
  $hamburger_icon.on('click', function (event) {
    event.preventDefault();
    //close cart panel (if it's open)
    $lateral_cart.removeClass('speed-in');
    toggle_panel_visibility($menu_navigation, $shadow_layer, $('body'));
  });

  //open cart
  $cart_trigger.on('click', function (event) {
    event.preventDefault();
    //close lateral menu (if it's open)
    $menu_navigation.removeClass('speed-in');
    toggle_panel_visibility($lateral_cart, $shadow_layer, $('body'));
  });

  $cartclose.on('click', function () {
    $cartclose.removeClass('is-visible');
    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if ($lateral_cart.hasClass('speed-in')) {
      $lateral_cart.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        $('body').removeClass('overflow-hidden');
      });
      $menu_navigation.removeClass('speed-in');
    }
  });

  $navlink.on('click', function () {
    $navlink.removeClass('is-visible');
    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if ($lateral_cart.hasClass('speed-in')) {
      $lateral_cart.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        $('body').removeClass('overflow-hidden');
      });
      $menu_navigation.removeClass('speed-in');
    } else {
      $menu_navigation.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        $('body').removeClass('overflow-hidden');
      });
      $lateral_cart.removeClass('speed-in');
    }
  });


  //close lateral cart or lateral menu
  $shadow_layer.on('click', function () {
    $shadow_layer.removeClass('is-visible');
    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if ($lateral_cart.hasClass('speed-in')) {
      $lateral_cart.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        $('body').removeClass('overflow-hidden');
      });
      $menu_navigation.removeClass('speed-in');
    } else {
      $menu_navigation.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        $('body').removeClass('overflow-hidden');
      });
      $lateral_cart.removeClass('speed-in');
    }
  });

  //move #main-navigation inside header on laptop
  //insert #main-navigation after header on mobile
  move_navigation($menu_navigation, $L);
  $(window).on('resize', function () {
    move_navigation($menu_navigation, $L);

    if ($(window).width() >= $L && $menu_navigation.hasClass('speed-in')) {
      $menu_navigation.removeClass('speed-in');
      $shadow_layer.removeClass('is-visible');
      $('body').removeClass('overflow-hidden');
    }

  });
});

function toggle_panel_visibility($lateral_panel, $background_layer, $body) {
  if ($lateral_panel.hasClass('speed-in')) {
    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    $lateral_panel.removeClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
      $body.removeClass('overflow-hidden');
    });
    $background_layer.removeClass('is-visible');

  } else {
    $lateral_panel.addClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
      $body.addClass('overflow-hidden');
    });
    $background_layer.addClass('is-visible');
  }
}

function move_navigation($navigation, $MQ) {
  if ($(window).width() >= $MQ) {
    $navigation.detach();
    $navigation.appendTo('header');
  } else {
    $navigation.detach();
    $navigation.insertAfter('header');
  }
}

$('.buy').click(function () {
  $('.bottom').addClass("clicked");
});

$('.remove').click(function () {
  $('.bottom').removeClass("clicked");
});


$(document).ready(function () {
  // Smooth Scroll
  $('a[href*="#"]').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 2000);
  });

  // Animation on Scroll
  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });

  // $("body").niceScroll({
  //   scrollspeed: 300, // scrolling speed
  //   mousescrollstep: 50, // scrolling speed with mouse wheel (pixel)
  //   // enablemousewheel: true,
  //   horizrailenabled: false,
  //   smoothscroll: true,
  // });

  // $('.nicescroll-rails').remove();
});

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// You can use a ScrollTrigger in a tween or timeline
gsap.to(".spicesSprinkle", {
  y: 70,
  duration: 1,
  ease: "Power1.easeInOut",
  motionPath: {
    path: [{
      x: 0,
      y: 0
    }, {
      x: -10,
      y: 80
    }, {
      x: 0,
      y: 70
    }, {
      x: 5,
      y: 100
    }],
    type: "cubic",
    curviness: 1.25
  },
  rotation: 0,
  scrollTrigger: {
    trigger: ".bgImg",
    scrub: true,
    markers: false,
    // id: "scrub"
  }
});

gsap.to(".spicesExtra1", {
  y: 70,
  duration: 1,
  ease: "Power1.easeInOut",
  motionPath: {
    path: [{
      x: 30,
      y: 0
    }, {
      x: -10,
      y: 80
    }, {
      x: 20,
      y: 70
    }, {
      x: 5,
      y: 100
    }],
    type: "cubic",
    curviness: 1.25
  },
  rotation: 0,
  scrollTrigger: {
    trigger: ".bgImg",
    scrub: true,
    markers: false,
  }
});

gsap.to(".spicesExtra2", {
  y: 70,
  duration: 3,
  ease: "Power1.easeInOut",
  motionPath: {
    path: [{
      x: -30,
      y: 0
    }, {
      x: -10,
      y: 80
    }, {
      x: 20,
      y: 70
    }, {
      x: 5,
      y: 100
    }],
    type: "cubic",
    curviness: 1.25
  },
  rotation: 0,
  scrollTrigger: {
    trigger: ".bgImg",
    scrub: true,
    markers: false,
  }
});

gsap.to(".spicesExtra3", {
  y: 70,
  duration: 2,
  ease: "Power1.easeInOut",
  motionPath: {
    path: [{
      x: -20,
      y: 0
    }, {
      x: 0,
      y: 70
    }, {
      x: 10,
      y: 70
    }, {
      x: -5,
      y: 80
    }],
    type: "cubic",
    curviness: 1.25
  },
  rotation: 0,
  scrollTrigger: {
    trigger: ".bgImg",
    scrub: 1,
    markers: false
  }
});

gsap.to(".topRight", {
  duration: 1,
  ease: "Power1.easeInOut",
  motionPath: {
    path: [{
      x: 400,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }],
  },
  scrollTrigger: {
    trigger: ".bgImg",
    markers: false
  }
});

gsap.to(".topRight", {
  duration: 2,
  ease: "Power1.easeInOut",
  rotation: 30,
  scrollTrigger: {
    trigger: ".bgImg",
    scrub: 1,
    markers: false
  }
});

gsap.to(".bottomLeft", {
  duration: 1,
  ease: "Power1.easeInOut",
  motionPath: [{
    x: -400,
    y: 0
  }, {
    x: 0,
    y: 0
  }, {
    x: 0,
    y: 0
  }],
  scrollTrigger: {
    trigger: ".bottomLeft",
    markers: false
  }
});

gsap.to(".bottomLeft", {
  duration: 2,
  ease: "Power1.easeInOut",
  rotation: 10,
  scrollTrigger: {
    trigger: ".bottomLeft",
    scrub: 1,
    markers: false
  }
});

var tl = gsap.timeline();

tl.fromTo('.logo-back', {
  opacity: 0.2
}, {
  duration: 4,
  opacity: 0.7,
  scrollTrigger: {
    trigger: ".logo-back",
    scrub: 1,
    markers: false
  }
}, );

tl.reverse(0, true);