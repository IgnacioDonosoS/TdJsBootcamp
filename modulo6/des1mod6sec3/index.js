const axios = require("axios");
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    let pokemonitos = [];
    if (req.url.includes("/pokemones")) {
      res.writeHead(200, { "Content-Type": "application/json" });
      getPoke()
        .then(async (pokemones) => {
          for (let i = 0; i < pokemones.length; i++) {
            await getPokeData(pokemones[i].url)
              .then((img) => {
                pokemonitos.push({
                  nombre: pokemones[i].name,
                  img: img,
                })
              })
              .catch((err) => console.error(err));
          }
          res.write(JSON.stringify(pokemonitos));
          res.end();
        })
        .catch(console.error);
    }
    if (req.url.includes("/index")) {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("index.html", (err, data) => {
        res.write(data);
        res.end();
      });
    }
  })
  .listen(3000, () => console.log("3000"))

let getPoke = async () => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  )
  const poke = data.results;
  return poke;
};

let getPokeData = async (url) => {
  const { data } = await axios.get(url);
  return data.sprites.front_default;
};
