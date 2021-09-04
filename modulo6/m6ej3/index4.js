const axios = require("axios");

let getPoke = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  const poke = data;
  return poke;
};

let getPokeData = async (url) => {
  const { data } = await axios.get(url);
  const peso = data;
  return peso;
};
getPoke()
  .then((pokemones) => {
      pokemones.results.forEach(poke => {
          getPokeData(poke.url).then((data) => {
              console.log(`Nombre del pokemon: ${poke.name}, peso: ${data.weight} bananas, altura ${data.height} pixeles`)
          })
      });
  })
  .catch(console.error);
