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
});