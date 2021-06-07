export default class Impuesto{
    constructor(montoBrutoAnual, deducciones){
        this._monto_bruto_anual = montoBrutoAnual
        this._deducciones = deducciones
    }
    get monto_bruto_anual(){
        return this._monto_bruto_anual
    }
    set monto_bruto_anual(montoBrutoAnual){
        this._monto_bruto_anual = montoBrutoAnual;
    }
    get deducciones(){
        return this._deducciones
    }
    set setDeducciones(deducciones){
        this._deducciones = deducciones;
    }
}

