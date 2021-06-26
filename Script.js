const getDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  try {
    const response = await fetch(url);
    const datos = await response.json();
    datos.forEach((datos) => {
      if (datos.id <= 20) document.write(`<p> ${datos.id} - ${datos.title}</p>`);
    });
  } catch (err) {
    console.log(err);
  }
};
getDatos();

async function AsyncTimeout() {
  let miPromesa = new Promise((resolver) => {
    setTimeout(() => resolver("Datos enviados"), 3000);
  });
  console.log(await miPromesa);
}
AsyncTimeout();
