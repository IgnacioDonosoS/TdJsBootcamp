const child_process = require("child_process");
// 2
let num1 = null;
let num2 = null;
// 3
function ejecutar(archivo) {
  // 4
  return new Promise((resolve) => {
    // 5
    child_process.exec(`node ${archivo}`, function (err, result) {
      resolve(Number(result));
    });
  });
}
// 6
ejecutar("num1.js").then((numero1) => {
  num1 = numero1;
  // 7
  ejecutar("num2.js").then((numero2) => {
    num2 = numero2;
    console.log(num1 + num2);
  });
});
