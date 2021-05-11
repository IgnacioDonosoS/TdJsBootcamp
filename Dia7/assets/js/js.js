//Definimos nuestras variables
var nombre = prompt("Ingresa un nombre: ");
var carrera = prompt("Ingrese su carrera: ");
var arrayNotas = new Map();
for (let i = 0; i < 3; i++) {
  var ramo = prompt("Ingrese nombre del ramo");
  var nota1 = prompt("ingrese la primera nota del ramo");
  var nota2 = prompt("ingrese la segunda nota del ramo");
  if (i < 2) {
    var nota3 = prompt("ingrese la tercera nota del ramo");
  }
  if (i < 2) {
    arrayNotas.set(i, { ramo, nota1, nota2, nota3 });
  } else {
    nota3 = "";
    arrayNotas.set(i, { ramo, nota1, nota2, nota3 });
  }
}
var notaAprobacion = prompt("Ingrese la nota de aprobación del ramo 3");
//Aquí creamos nuestro div contenedor
document.write("<div class='container pt-5'>");
//definimos nombres
document.write("<h1>Notas Finales</h1>");
document.write("<div class='row py-5'>");
document.write("<h4 class='col-6'>Nombre: </h3>");
document.write("<h5 class='text-muted col-6'>" + nombre + "</h1>");
document.write("</div>");
document.write("<div class='row pb-5'>");
document.write("<h4 class='col-6'>Carrera: </h3>");
document.write("<h5 class='text-muted col-6'>" + carrera + "</h1>");
document.write("</div>");
//definimos el mensansaje final
document.write("<div>");
notaMensaje =
  (notaAprobacion -
    ((parseFloat(arrayNotas.get(2).nota1) * 333) / 1000 +
      (parseFloat(arrayNotas.get(2).nota1) * 333) / 1000)) *
  3;
if (notaMensaje <= 0) {
  document.write(
    "<div> <p> Usted ya aprobo el ramo " + arrayNotas.get(2).ramo + "</p>"
  );
} else {
  document.write(
    "<div> <p> Usted necesita una nota " +
      notaMensaje +
      " para pasar el ramo " +
      arrayNotas.get(2).ramo +
      "</p>"
  );
}
document.write("</div>");
//Aquí creamos nuestra tabla con bootstrap
document.write("<div>");
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
//Con tr definimos las columnas de la tabla
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota1</th>");
document.write("<th scope='col'>Nota2</th>");
document.write("<th scope='col'>Nota3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");
//Aquí cerramos el encabezado de nuestra tabla
//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");

for (let i = 0; i < arrayNotas.size; i++) {
  document.write("<tr>");

  document.write("<td>" + arrayNotas.get(i).ramo + "</td>");
  document.write("<td>" + arrayNotas.get(i).nota1 + "</td>");
  document.write("<td>" + arrayNotas.get(i).nota2 + "</td>");
  document.write("<td>" + arrayNotas.get(i).nota3 + "</td>");
  if (i < arrayNotas.size - 1) {
    document.write(
      "<td>" +
        (parseInt(arrayNotas.get(i).nota1) +
          parseInt(arrayNotas.get(i).nota2) +
          parseInt(arrayNotas.get(i).nota3)) /
          3 +
        "</td>"
    );
  } else {
    document.write("<td></td>");
  }//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
  document.write("</tr>");
}
//Aquí cerramos nuestra tabla
document.write("</tbody>");
document.write("</table");
document.write("</div>");

document.write("</div>");
