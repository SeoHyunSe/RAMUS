$(function(){
   $('.nav li').mouseenter(function(){
      $('.header_inner h1, .header_inner p').hide();      
   });
   $('.nav li').mouseleave(function(){
    $('.header_inner h1, .header_inner p').show();      
 });
});
