function test(){
  let nombre = document.getElementById("nombre").value; 
  let asunto = document.getElementById("asunto").value; 
  let mensaje = document.getElementById("mensaje").value; 
  const regex = new RegExp('^[a-zA-Z ]{2,100}$');
  if (!regex.test(nombre)) {
    document.getElementById("errorNombre").innerText = "Nombre no válido";
  }
  else{
    document.getElementById("errorNombre").innerText= null;
  }
  if (!regex.test(asunto)) {
    document
    .getElementById("errorAsunto").innerText = "Asunto no válido";
  }
  else{
    document.getElementById("errorAsunto").innerText = null;
  }
  if (!regex.test(mensaje)) {
    document.getElementById("errorMensaje").innerText = "Mensaje no válido";
  }
  else{
    document.getElementById("errorMensaje").innerText = null;
  }
  if (
    regex.test(mensaje) &&
    regex.test(asunto) &&
    regex.test(mensaje)
  ) {
    document
      .getElementById("mensajeExito")
      .innerText = "Mensaje enviado Con exito!";
  }
  else{
    document
    .getElementById("mensajeExito")
    .innerText = null;
  }
}
