$(document).ready(function () {

    $(function() {
        $( '[data-toggle="tooltip"]' ).tooltip()
        })
    $("h6:first").dblclick(function(){
        $("h6:first").css("color", "red")
      });
      $("h6:last").dblclick(function(){
        $("h6:last").css("color", "red")
      });
      $('[data-toggle="popover"]').popover()
});