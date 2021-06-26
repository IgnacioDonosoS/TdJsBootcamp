const notas = (arreglo, callback) => callback(arreglo)
const separar = (arreglo) => {
  var arrayPares = [];
  var arrayImpares = []
  arreglo.forEach((item) => {
    if (item % 2 == 0) {arrayPares.push(item)}
    else{arrayImpares.push(item)};});
  return {arrayPares, arrayImpares}
};
let arreglo = [3,4,6,2,5,4,67,9];
console.log(notas(arreglo, separar))