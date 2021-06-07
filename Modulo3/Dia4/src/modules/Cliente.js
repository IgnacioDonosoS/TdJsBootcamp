export default class Cliente{
    constructor(nombre, impuesto = {}) {
        this._nombre = nombre
        this._impuesto = impuesto
    }
    get getNombre(){
        this._nombre
    }
    set setNombre(nombre){
        this._nombre = nombre
    }
    calcularImpuesto(){return (this._impuesto._monto_bruto_anual - this._impuesto._deducciones) * 0.21} 
}

