const child_process = require("child_process");
    child_process.exec(`node blueMoney prueba.txt bitcoin 800`, function (err, result) {
    console.log(result)});