var clics = 0;

$(document).ready(function() {
  $(".respuesta").hide();
  $("#cerrartodas").hide();

  $("h3.faqq").click(function() {
    $(this)
      .next(".respuesta")
      .toggle(
        function() {
          $(this).next(".respuesta");
        },
        function() {
          $(this)
            .next(".respuesta")
            .fadeIn("fast");
        }
      );

    if ($(this).hasClass("cerrar")) {
      $(this).removeClass("cerrar");
    } else {
      $(this).addClass("cerrar");
    }

    if ($(".cerrar").length >= 3) {
      $("#cerrartodas").fadeIn("fast");
    } else {
      $("#cerrartodas").hide();
      var abiertas = $(".cerrar").length;
      console.log(abiertas);
    }
  }); //Close Function Click
}); //Close Function Ready

$("#cerrartodas").click(function() {
  $(".respuesta").fadeOut(200);
  $("h3").removeClass("cerrar");
  $("#cerrartodas").fadeOut("fast");
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxY_U44D0S3VHyvYlTKxDpwsdP2xliioHcufUcEZnxaei-ehnYL/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(document.getElementById("email-conf").removeAttribute("id"))
    .catch(error => console.error("Error!", error.message));
});
