let formulario = document.querySelector("form");
formulario.addEventListener("submit", formSubmit);
function formSubmit(event) {
  const baseUrl = "https://api.github.com/users";
  
  const request = async (url) => {
    const results = await fetch(url);
    const response = await results.json();
    return response;
  };

  let nombre = $("#nombre").val();
  let pagina = $("#pagina").val();
  let repoPagina = $("#repoPagina").val();

  const getUser = async () => {
    const url = `${baseUrl}/${nombre}`;
    return request(url);
  };
  const getPost = async () => {
    const url = `${baseUrl}/${nombre}/repos?page=${pagina}&per_page=${repoPagina}`;
    return request(url);
  };
  if (nombre && pagina && repoPagina ) {
    Promise.all([getUser(), getPost()])
    .then((resp) => {
        
        let avatar = resp[0].avatar_url;
        let nombreUsuario = resp[0].name;
        let nombreLogin = resp[0].login;
        let cantRepos = resp[0].public_repos;
        let localidad = resp[0].location;
        let tipoUser = resp[0].type;
        $("#datosUsuarios").replaceWith(`
        <div class="col-6" id="datosUsuarios"><div>
        <h3 class="text-center">Datos del usuario</h3>
        <img src="${avatar}" alt="">
        <p>Nombre de usuario: ${nombreUsuario}</p>
        <p>Nombre de login: ${nombreLogin}</p>
        <p>Cantidad de repositorios; ${cantRepos}</p>
        <p>Localidad del usuario. ${localidad}</p>
        <p>Tipo de usuario: ${tipoUser}</p>
        </div> </div>`);
        
        let string = "";
        resp[1].forEach(item => {
            string += `<div class="mb-2"><a href="${item.html_url}">${item.name}</a> </div>`;
        })
        $("#datosRepo").replaceWith(`<div class="col-6 text-right" id="datosRepo"><div> 
        <h3 class="text-center"> Datos Repositorio </h3>
        ${string}
        </div></div>`);

    })
    .catch((err) => alert("Falta ingresar Datos"));
  event.preventDefault();
  formulario.reset();
    
  } else {
    alert("Falta ingresar Datos")
  }
  
}
