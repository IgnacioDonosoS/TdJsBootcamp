const nodemailer = require("nodemailer");

let enviar = (to, subject, html) => {

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ignacio.donoso.s@gmail.com",
        pass: "",
      },
    });
    let mailOptions = {
      from: "ignacio.donoso.s@gmail.com",
      to,
      subject,
      html,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) console.log(err);
      if (data) console.log(data);
    });

}

// Paso 2
module.exports = enviar;