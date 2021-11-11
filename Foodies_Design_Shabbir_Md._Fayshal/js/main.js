
$('document').ready(function(){
//Active Menu Highlight
$(document).on('click','ul li a',function(){
  $('ul li a').removeClass('active');
  $(this).addClass('active');
})

})
