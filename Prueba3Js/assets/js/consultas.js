let Animales = (async ()  => {
  const url = "/animales.json";
  const res = await fetch(url)
  const data = await res.json();
  return data;
})();

export default Animales;