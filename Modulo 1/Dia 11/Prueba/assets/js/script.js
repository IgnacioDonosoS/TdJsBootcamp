$(document).ready(function () {
    $("a").click(function (event) {
      event.preventDefault();
      //calculate destination place
      var dest = 0;
      if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
      } else {
        dest = $(this.hash).offset().top - 86;
      }
      //go to destination
      $("html,body").animate({ scrollTop: dest }, 800, "swing");
    });
    $("#facebook").click(function () { 
        window.location.href = "http://www.facebook.com";
    });
    $("#github").click(function () { 
        window.location.href = "http://www.github.com";
    });
    $("#twitter").click(function () { 
        window.location.href = "http://www.twitter.com";
    });
    $("#linkedin").click(function () { 
        window.location.href = "http://www.linkedin.com";
    });
  });
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  