$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

$('body').scrollspy({
  target: '.navbar-fixed-top'
})

$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
  var modal = this;
  var hash = modal.id;
  window.location.hash = hash;
  window.onhashchange = function() {
    if (!location.hash){
      $(modal).modal('hide');
    }
  }
});