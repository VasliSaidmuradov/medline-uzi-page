$(window).resize(function () {
  var viewportWidth = $(window).width();
  if (viewportWidth < 600) {
    $(".animatedParent").removeClass("animatedParent");
  }
});