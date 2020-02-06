$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('hamburger-x');
        $('.collapse').slideToggle();
     })
    $(window).resize(function(){
        let w = $(window).width();
        if(w < 600){
            $('.collapse').hide();
            $('.hamburger').removeClass('hamburger-x');
        }else{
            $('.collapse').show();
        }
    })  
    //點擊移動到該處效果
    $('nav').find('a').on("click",function(e){
      e.preventDefault();
      let target = $(this).data(target);
      let offset = $(target).offset().top;
      $('html,body').animate({
        scrollTop: offset
        },200)
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
         $('#gotop').fadeIn();
         $('nav').addClass('active');
       }else {
         $('#gotop').fadeOut();
         $('nav').removeClass('active');
     }
  });
})
