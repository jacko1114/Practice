$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("hamburger-x");
    $(".collapse").slideToggle();
  });
  $(window).resize(function() {
    let w = $(window).width();
    if (w < 714) {
      $(".collapse").hide();
      $(".hamburger").removeClass("hamburger-x");
    } else {
      $(".collapse").show();
    }
  });
  //點擊移動到該處效果
  $("nav")
    .find("a")
    .on("click", function(e) {
      e.preventDefault();
      let navHeight = 60;
      let target = $(this).data("target");
      let offset = $(target).offset().top;
      $("html,body").animate(
        {
          scrollTop: offset - navHeight
        },
        500
      );
      $(this)
        .siblings()
        .removeClass("active");
      $(this).addClass("active");
      let w = $(window).width();
      if (w < 720) {
        $(".collapse").hide();
        $(".hamburger").removeClass("hamburger-x");
      }
    });
  //回到最上面效果
  $("#gotop").on("click", function(e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0
      },
      200
    );
  });
  //判斷gotop出現時機
  $(window).scroll(function() {
    let h = $(window).scrollTop();
    if (h > 60) {
      $("#gotop").show();
    } else {
      $("#gotop").hide();
      $("nav")
        .find("a")
        .removeClass("active");
    }
  });
});
