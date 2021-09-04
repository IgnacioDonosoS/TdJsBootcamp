const nodemailer = require('nodemailer')
// Paso 1
let enviar = (to, subject, body) => {
let transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'ignacio.donoso.s@gmail.com',
pass: 'Pepe72613543',
},
})
let mailOptions = {
from: 'ignacio.donoso.s@gmail.com',
to,
subject,
body,
}
transporter.sendMail(mailOptions, (err, data) => {
if (err) console.log(err)
if (data) console.log(data)
})
}
// Paso 2
module.exports = enviar
