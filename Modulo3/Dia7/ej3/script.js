const recibiendoNumeros = (a) => {
  return {
    restaNum: () => a - 1,
    sumaNum: () => a + 1,
  };
};
const restando = recibiendoNumeros(33).restaNum();
console.log(restando)
const suma = recibiendoNumeros(restando).sumaNum();
console.log(suma)

