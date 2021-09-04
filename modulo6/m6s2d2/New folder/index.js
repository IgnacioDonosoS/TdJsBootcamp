const yargs = require('yargs')
const child = require('child_process')
const pass = 123
const argv = yargs
.command(
'acceso',
'Key para acceder',
{
pass: {
describe: 'Contraseña',
demand: true,
alias: 'k',
},
},
(args) => {args.pass == pass
?
child.exec('nodemon key.js', (err, stdout) => {
err ? console.log(err) : console.log(stdout)
})
:
console.log('Key incorrecta')
}
)
.help().argv