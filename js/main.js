$(document).ready(function(){
    $('.hamburger').click(function(){
      $(this).toggleClass('hamburger-x');
      $('.collapse').slideToggle();
  })
    $('.collapse').hide();
    $(window).resize(function(){
      let w = $(window).width();
      if(w < 720){
          $('.collapse').hide();
          $('.hamburger').removeClass('hamburger-x');
      }else{
          $('.collapse').show();
      }
    })  
    //點擊移動到該處效果
    $('nav').find('a').on("click",function(e){
      e.preventDefault();
      let navHeight = 60;
      let target = $(this).data("target");
      let offset = $(target).offset().top;
      $('html,body').animate({
        // scrollTop: offset
        scrollTop: offset - navHeight
        },200)
      $('.collapse').hide();
    });
  //回到最上面效果
    $('#gotop').on("click",function(e){
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
        },200)
    });
  //判斷gotop出現時機
    $(window).scroll(function(){
       let h = $(window).scrollTop();
       if(h > 600){
        $('#gotop').animate({
          right: +50
         },0).fadeIn("slow");
         $('nav').addClass('active');
       }else {
         $('#gotop').animate({
           right: -50
          },50).fadeOut();
         $('nav').removeClass('active');
     }
  });
})
