const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'ignacio.donoso.s@gmail.com',
pass: 'Pepe72613543',
},
})

let mailOptions = {
from: 'ignacio.donoso.s@gmail.com',
to: 'ignacio.donoso.s@gmail.com',
subject: 'Nodemailer Test',
html: `
<h1>Desafío</h1>
<h2>LATAM</h1>
`,
}

transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log(err)
    if (data) console.log(data)
    })
    