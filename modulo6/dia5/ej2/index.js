const http = require("http");
const enviar = require('./mailer')
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    if (req.url.includes("/index")) {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("index.html", (err, data) => {
        res.write(data);
        res.end();
      });
    }
    if (req.url.includes("/mandar")) {
        let { to, subject, body } = url.parse(req.url, true).query;
        if(to != "" && subject != "" && body != "")  {
          if (to.includes (",")){enviar(to.split(','), subject, body)}
          else{enviar(to, subject, body)}
          res.end("enviado")}
        else {res.end("ponte vioh")}
    }
  })
  .listen(8080, () => console.log("escuchanding"));
