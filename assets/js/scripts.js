$(document).ready(function () {
  //animated rendering
  if ($(".main-container").hasClass("fadeOut")) {
    $(".main-container").removeClass("fadeOut").addClass("fadeIn");
  }

  // naviagation toggle
  $("#snb-toggle").click(function () {
    if ($("nav[aria-label='snb']").css("display") == "none") {
      $("nav[aria-label='snb']").show().attr("aria-expanded", true);
      $("nav[aria-label='gnb']").css("width", "calc(100% - 256px - 16px)");
      $("main[role='main']").css("width", "calc(100% - 256px)");
    } else {
      console.log("click!");
      $("nav[aria-label='snb']").hide().attr("aria-expanded", false);
      $("nav[aria-label='gnb']").css("width", "calc(100% - 16px)");
      $("main[role='main']").css("width", "100%");
    }
  });

  // scroll event
  $(".main-content").scroll(function () {
    $(".goup").show();
    if ($(".main-content").scrollTop() === 0) {
      $(".goup").hide();
    }
  });
  $(".goup").click(function () {
    $(".main-content").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // post mouse event
  $(".post").mouseenter(function () {
    $(this).addClass("animated").addClass("pulse");
  });
  $(".post").mouseleave(function () {
    $(this).removeClass("pulse");
  });

  //go to list
  $(".go-back").click(function(){
    window.history.back();
  });
});
