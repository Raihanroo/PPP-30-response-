$('.counter').counterUp({
  delay: 10,
  time: 1000
});


$('.team_slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow:".next",
  prevArrow:".prev"

});

// lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})