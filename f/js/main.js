(function() {

}());
function getGridSize() {
  return ($(window).innerWidth() < 576) ? 1 :
    ($(window).innerWidth() < 768) ? 2 :
    ($(window).innerWidth() < 992) ? 3 : 4;
};
$(document).ready(function() {
  //$('[data-toggle="tooltip"]').tooltip();
  $(".slider-line").each(function(){
    var stHeight = $(this).find('.slick-track').height();
    $(this).find('.slick-slide').css('height',stHeight + 'px' );
  });
});
