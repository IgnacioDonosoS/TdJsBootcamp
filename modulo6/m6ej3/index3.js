const axios = require("axios");

async function getUser() {
  const { data } = await axios.get("https://randomuser.me/api/");
  const user = data.results[0];
  return user;
}
// Paso 3
async function getHolidays() {
  const { data } = await axios.get(
    "https://www.feriadosapp.com/api/holidays.json"
  );
  return data.data;
}
Promise.all([getUser(), getHolidays()])
  .then((resultado) => {
    const user = resultado[0];
    const nombre = `${user.name.first} ${user.name.last}`;
    const nacimiento = new Date(user.dob.date);
    const cumpleaños = `${nacimiento.getMonth() + 1}-${
      nacimiento.getDate() < 10
        ? "0" + nacimiento.getDate()
        : nacimiento.getDate()
    }`;
    const feriados = resultado[1];
    const carrete = feriados.find((f) => f.date.includes(cumpleaños));
    // Paso 7
    carrete
      ? console.log(`
    'Prepárense todos! porque ${nombre} estará de cumpleaños en el
    feriado ${carrete.title}'
    `)
    : console.log(`${nombre} no cumple años en ningún día feriado :/`);
  })
  .catch(console.error);
