$(document).ready(function () {
  //animated rendering
  if ($(".main-container").hasClass("fadeOut")) {
    $(".main-container").removeClass("fadeOut").addClass("fadeIn");
  }

  // navagation set
  var now = $(location).attr("pathname");
  $(".sub-page")
    .children("li")
    .children("a")
    .each(function (index, item) {
      if (now.indexOf($(this).attr("href")) >= 0) {
        $(this).css("color", "#A6A498");
        return false;
      }
    });

  // naviagation toggle
  $("#snb-toggle").click(function () {
    if ($("nav[aria-label='snb']").css("display") == "none") {
      $("nav[aria-label='snb']").show().attr("aria-expanded", true);
      $("nav[aria-label='gnb']").css("width", "calc(100% - 256px - 16px)");
      $("main[role='main']").css("width", "calc(100% - 256px)");
    } else {
      $("nav[aria-label='snb']").hide().attr("aria-expanded", false);
      $("nav[aria-label='gnb']").css("width", "calc(100% - 16px)");
      $("main[role='main']").css("width", "100%");
    }
  });

  // scroll event1
  $("main[role='content']").scroll(function () {
    $(".goup").show();
    if ($("main[role='content']").scrollTop() === 0) {
      $(".goup").hide();
    }
  });
  $(".goup").click(function () {
    $("main[role='content']").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // scroll event2
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

  //go to list
  $(".go-back").click(function () {
    window.history.back();
  });
});
