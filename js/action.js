
$(function(){
    $(window).scroll(function() {
     if($(this).scrollTop() > 50){
      $('.header').stop().animate({top:"-200px"});
      $('.list').stop().animate({top:"-200px"});
      $('.logoline').stop().animate({top:"-200px"});
     }
     else{
      $('.header').stop().animate({top:"0px"});
      $('.list').stop().animate({top:"0px"});
      $('.logoline').stop().animate({top:"0.5px"});
     }
    }).scroll();
   });
   $(document).ready(function(){
    $('.itemslick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });
  
  