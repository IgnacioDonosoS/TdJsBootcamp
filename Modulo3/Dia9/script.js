const pepe = (numero1, numero2) => {
  const resultado = numero1 + numero2;
  checkear(resultado, (grado) => {
    console.log(grado);
  });
};

const checkear = (resultado, callback) => {
  var checkeo;
  if (resultado >= 6 && resultado <= 10) {
    checkeo = "paso";
  } else {
    checkeo = "no paso";
  }
  callback(checkeo);
};

pepe(3, 4);
pepe(2,2)

