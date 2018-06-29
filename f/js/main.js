(function() {

}());
function getGridSize() {
  return ($(window).innerWidth() < 576) ? 1 :
    ($(window).innerWidth() < 768) ? 2 :
    ($(window).innerWidth() < 992) ? 3 : 4;
};
$(document).ready(function() {
  $(".slider-line").each(function(){
    var stHeight = $(this).find('.slick-track').height();
    $(this).find('.slick-slide').css('height',stHeight + 'px' );
  });
  $(".preface__nav a").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
    return false;
  });
});
