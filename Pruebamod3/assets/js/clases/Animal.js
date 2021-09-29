class Animal{
    constructor(nombre, edad, imagen, comentarios, sonido){
        let Nombre = nombre;
        let Edad = edad;
        let Imagen = imagen;
        let Comentarios = comentarios;
        let Sonido = sonido;

        this.getNombre = () => Nombre;
        this.getEdad = () => Edad;
        this.getImagen = () => Imagen;
        this.getComentarios = () => Comentarios;
        this.getSonido = () => Sonido;

    }

    get Nombre(){
        return this.getNombre();
    }
    get Edad(){
        return this.getEdad();
    }
    get Imagen(){
        return this.getImagen();
    }
    set Comentarios(comentario){
        return this.getComentarios(comentario);
    }
    get Sonido(){
        return this.getSonido();
    }
}
export default Animal;