$(document).ready(function () {




  let arrayCompra = [];
  $("img").click(function (e) {
    
    if (arrayCompra.includes(this.id)) {

      for (let i = 0; i < arrayCompra.length; i++) {
        if (arrayCompra[i] == this.id) {
          arrayCompra.splice(i, 1);
        }
      }
    } else {
      arrayCompra.push(this.id);
    }


    if ($(this).hasClass("border border-success")) {
      $(this).removeClass("border border-success");
    } else {
      $(this).addClass("border border-success");
    }
  });




  $("#cart").click(function (e) {
    e.preventDefault();
    let agregar = "";
    arrayCompra.forEach((prod) => {
      agregar += `<img src="/img/${prod}.png" height="200px" />`;
    });
    console.log(agregar);
    $("#modalProd").replaceWith(`<div class="modal-body" id="modalProd">
    ${agregar}
    </div>`);
  });
});
