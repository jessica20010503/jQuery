$(document).ready(function () {
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.floder').slideToggle();
      
        
        
    });
    $('.top').click(function(e){
        e.preventDefault();
        $('html,body').animate({
          scrollTop:0
        },1000);
      });
});