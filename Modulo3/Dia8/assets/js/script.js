let iifePatrMod = (() => {
  let inyectarTodo = (url, id) => {
    id.setAttribute("src", url);
    id.style.display = "block";
  };
  return {
    mostrarTodo: (url, id) => inyectarTodo(url, id),
  };
})();

class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => _url;
  }
  get url() {
    return this.getUrl();
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    let _id = id;
    this.getId = () => _id;
  }

  get id() {
    return this.getUrl();
  }

  playMultimedia(id, url) {
    iifePatrMod.mostrarTodo(this.url, this.getId());
  }

  setInicio(tiempo) {
    this.getId().setAttribute("src", `${this.url}?start=${tiempo}`);
  }
}

var pelicula = new Reproductor(
  "https://www.youtube.com/embed/klJaLmYj2TM",
  document.getElementById("peliculas")
);
pelicula.playMultimedia()
pelicula.setInicio(60)

var musica = new Reproductor(
  "https://www.youtube.com/embed/z1CSneHgd6c",
  document.getElementById("musica")
);
musica.playMultimedia();  
var serie = new Reproductor(
  "https://www.youtube.com/embed/Hp5kUmni5Dk",
  document.getElementById("series")
);
serie.playMultimedia()
