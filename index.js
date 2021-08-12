const https = require('https');
const fs = require('fs');

const [archivo, extension, indicador, cantidad] = process.argv.slice(2)

https.get('https://mindicador.cl/api', (resp) =>{
  let data = '';
  resp.on('data', (valores) =>{
    data += valores;
    let misDatos = JSON.parse(data)
    let valor_cambio = misDatos[`${indicador}`].valor 
    let cantidadTotal = indicador === 'dolar' && indicador === 'euro' ?  (cantidad / valor_cambio)/ valor_cambio  :  cantidad / valor_cambio   

    let fecha = new Date();
    
    fs.writeFile(`${archivo}.${extension}`, 
    `A la fecha: ${fecha}
    Fue realizada cotización con los siguientes datos:
    Cantidad de pesos a convertir: ${cantidad} pesos
    Convertido a ${indicador} da un total de:
    $${cantidadTotal}`, 'utf8', () => {
      fs.readFile(`${archivo}.${extension}`, 'utf8', (err, data) =>{
        console.log(data);
      } )
      })
  })
}).on('error', (err)=>{
  console.log('Error:' + err.message)
})
