import Animal from "./Animal.js";
let audioPlayer = document.querySelector("#player")
class Leon extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
}
  rugir() {
      audioPlayer.src = `assets/sounds/${this.getSonido()}`
      audioPlayer.play()
  }       
}

class Lobo extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }
  aullar() {
    audioPlayer.src = `assets/sounds/${this.getSonido()}`
    audioPlayer.play()
  }
}

class Oso extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }
  gruñir() {
    audioPlayer.src = `assets/sounds/${this.getSonido()}`
    audioPlayer.play()
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }
  sissear() {
    audioPlayer.src = `assets/sounds/${this.getSonido()}`
    audioPlayer.play()
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }
  chillar() {
    audioPlayer.src = `assets/sounds/${this.getSonido()}`
    audioPlayer.play()
  }
}

export {Leon, Lobo, Oso, Serpiente, Aguila}
