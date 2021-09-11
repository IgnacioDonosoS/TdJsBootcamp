const axios = require("axios")
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');
const enviar = require("./mailer");

const getNewRoommate = async() =>{
    try {
        const {data} = await axios.get("https://randomuser.me/api")
        const randomUser = data.results[0]
        const roommate = {
            "nombre": randomUser.name.first,
            "apellido": randomUser.name.last,
            "email": randomUser.email,
            "debe": 0,
            "recibe": 0,
            "total": 0,
            "id": uuidv4().slice(-6) 
        }
        return roommate
    } 
    catch (error) {
    console.log(error)    
    }

}
let saveRoommate = (usuario)=> {
const roommatesJson = JSON.parse(fs.readFileSync("roommates.json", "utf8"))
roommatesJson.roommates.push(usuario)
fs.writeFileSync("roommates.json", JSON.stringify(roommatesJson))
}

let sendMail = (nombre, apellido, email, debe, recibe) =>{
    datos = `Estimado: ${nombre} ${apellido} sus cuentas actuales son, Debe ${debe} y recibe ${recibe}.`
    enviar(email, 'Actualización deudas', datos)
}

module.exports = {getNewRoommate, saveRoommate, sendMail}
