const https = require("https");
https
.get("https://pokeapi.co/api/v2/pokemon/ditto", (request) => {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body);
      console.log(JSON.parse(body))
});
})
.on("error", (e) => {
console.error(e);
});