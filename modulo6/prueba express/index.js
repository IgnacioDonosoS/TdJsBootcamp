var express = require('express')
var app = express()
let juanito = {"nombre":"juanito", "edad":"99"}
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send(juanito)
})
app.listen(8080)