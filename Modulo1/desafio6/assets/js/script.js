$(document).ready(function () {
  checkScreen();

  $(window).resize(function () {
    checkScreen();
  });

  function checkScreen() {
    if ($(window).width() < 580) {
      $("#carousel").hide();
      $("#recetaPc").hide();
      $("#recetaMobil").show();
    } else {
      $("#carousel").show();
      $("#recetaPc").show();
      $("#recetaMobil").hide();
    }
  }
  $("#hover1").hover(
    function () {
      $(this).css("cursor", "pointer").attr("title", "Envia un correo.");
    },
    function () {
      $(this).css("cursor", "auto");
    }
  );
  $("#hover2").hover(
    function () {
      $(this).css("cursor", "pointer").attr("title", "Agrega a sus favoritos.");
    },
    function () {
      $(this).css("cursor", "auto");
    }
  );
  $("#hover1").click(function () {
    alert("Se envío el correo");
  });

  $("h3").dblclick(function () {
    if ($(this).hasClass("text-danger")) {
      $(this).removeClass("text-danger");
      $(this).addClass("text-dark");
    } else {
      $(this).removeClass("text-dark");
      $(this).addClass("text-danger");
    }
  });
  $(".borrar").click(function () { 
    $(".borrar").toggle();
    $("#cardMostrar").removeClass("d-none");
  });

  $("#cardMostrar").click(function () { 
    $(".borrar").toggle();
    $("#cardMostrar").addClass("d-none");
  });
});
