//= require jquery
//= require_tree .


$(document).ready(function() {

  $('#logo').addClass('animated slideInLeft');

  $('#list-form').addClass('animated fadeIn');

  $('#contact').addClass('animated fadeInDown');

  $('.pic').hide();
  $('.pic:first').show();
  $('.icon:first').addClass('active');

  $('.icon').hover(function(){
    $('.icon').removeClass('active');
    $(this).addClass('active');

    var currentTab = $(this).attr('href');
    $('.pic').hide();
    $(currentTab).show();
    return false;
  });
});
