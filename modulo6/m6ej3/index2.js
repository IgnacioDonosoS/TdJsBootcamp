const callback = (resolver, rechazar) => {
  if (Math.random() >= 0.5) {
    rechazar("El número resultante fue menor a 0.5 :/");
  } else {
    setTimeout(function () {
      resolver("El número resultante fue mayor o igual a 0.5 B) ");
    }, 5000);
  }
};

const promesa = new Promise(callback);
promesa
  .then((mensaje) => {
    console.log(
      "¡Sí! La promesa se resolvió sin problema y el mensaje resultante es:"
    );
    console.log(mensaje);
  })
  .catch((error) => {
    console.log("Bah… Algo salio mal :(, el error es el siguiente:");
    console.log(error);
  });
