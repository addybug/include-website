var clics = 0;

$(document).ready(function() {
  $(".question").hide();
  $("#closeAll").hide();

  $("h3.faqq").click(function() {
    $(this)
      .next(".question")
      .toggle(
        function() {
          $(this).next(".question");
        },
        function() {
          $(this)
            .next(".question")
            .fadeIn("fast");
        }
      );

    if ($(this).hasClass("closed")) {
      $(this).removeClass("closed");
    } else {
      $(this).addClass("closed");
    }

    if ($(".closed").length >= 3) {
      $("#closeAll").fadeIn("fast");
    } else {
      $("#closeAll").hide();
      var abiertas = $(".closed").length;
      console.log(abiertas);
    }
  }); //Close Function Click
}); //Close Function Ready

$("#closeAll").click(function() {
  $(".question").fadeOut(200);
  $("h3").removeClass("closed");
  $("#closeAll").fadeOut("fast");
});
