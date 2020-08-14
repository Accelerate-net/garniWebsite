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