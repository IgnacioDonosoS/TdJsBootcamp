const axios = require("axios")
const fs = require("fs")

let saveGasto = (body)=> {
const gastosJson = JSON.parse(fs.readFileSync("gastos.json", "utf8"))
gastosJson.gastos.push(body) 
fs.writeFileSync("gastos.json", JSON.stringify(gastosJson))
}  

const recalcularDeudas = () => {
    const roommatesArr = JSON.parse(fs.readFileSync("roommates.json", "utf8"))
    const gastosArr = JSON.parse(fs.readFileSync("gastos.json", "utf8"))
    // Seteo todos los valores a 0
    let roommates = roommatesArr.roommates
    let gastos = gastosArr.gastos
    roommates = roommates.map((item) => {
        item.debe = 0;
        item.recibe = 0;
        item.total = 0;
        return item;
    });

    gastos.forEach((elem)=>{
        roommates = roommates.map((item)=>{
            var dividendo = (elem.monto/roommates.length);

            if (elem.roommate == item.nombre) {
                item.recibe = item.recibe + dividendo
            } else {
                item.debe = item.debe - dividendo
            }

            item.total = item.debe + item.recibe;
            
            return item;
            })
           
        })
        let agregar = {roommates:roommates}
        fs.writeFileSync("roommates.json", JSON.stringify(agregar)) 
}

module.exports = {saveGasto, recalcularDeudas}