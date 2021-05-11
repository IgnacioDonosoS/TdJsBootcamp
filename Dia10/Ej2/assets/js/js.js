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
});
$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();
