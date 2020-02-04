$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('hamburger-x');
        $('.collapse').slideToggle();
     })
    $(window).resize(function(){
        let w = $(window).width();
        if(w < 600){
            $('.collapse').hide();
            $('.hamburger').removeClass('.hamburger-x');
        }else{
            $('.collapse').show();
        }
    })
})  
