// REQ1. Usar el paquete nodemailer para el envío de correos electrónicos.
const nodemailer = require ( 'nodemailer' )
let transporter = nodemailer.createTransport({
	service: 'gmail' ,
	auth: {
		user: 'nodemailerADL@gmail.com' ,
		pass: 'desafiolatam' ,
	},
})

// REQ2. Crear una función que reciba la lista de correos, asunto y contenido a enviar. Esta
// función debe retornar una promesa.
function send (correos, asunto, contenido) {
	return new Promise ((resolve, reject) => {
		let mailOptions = {
			from: 'nodemailerADL@gmail.com' ,
			to: correos,
			subject: asunto,
			html: contenido,
		}
		transporter.sendMail(mailOptions, (err, data) => {
			if (err) {
				reject(err)
			} else {
			console.log(data)
			}
		})
	})
}


//var 16,6 = 16!/(16-6)! = 16.15.14.13.12.11

// REQ3.Realizar una petición a la api de mindicador.cl y preparar un template que incluya los
// valores del dólar, euro, uf y utm. Este template debe ser concatenado al mensaje
// descrito por el usuario en el formulario HTML.

const axios = require ( "axios" );
function send (correos, asunto, contenido) {
	return new Promise ( async (resolve, reject) => {
		axios.get( "https://mindicador.cl/api" ).then((data) => {
			const dolar = data.data.dolar.valor;
			const euro = data.data.euro.valor;
			const uf = data.data.uf.valor;
			const utm = data.data.utm.valor;
			const templateIndicadores = `
				<br>
				<p> El valor del dolar el día de hoy es: ${dolar} </p>
				<p> El valor del euro el día de hoy es: ${euro} </p>
				<p> El valor del uf el día de hoy es: ${uf} </p>
				<p> El valor del utm el día de hoy es: ${utm} </p>
			`
			let mailOptions = {
				from: "nodemailerADL@gmail.com" ,
				to: correos,
				subject: asunto,
				html: contenido + templateIndicadores,
			};
			transporter.sendMail(mailOptions, (err, data) => {
				if (err) {
					reject(err);
				} else {
					fs.writeFile("correos/" + uuidv4().slice( 30 ),contenido,"utf8" ,() => {
						resolve(data);}
					);
				}
			});
		});
	});
}