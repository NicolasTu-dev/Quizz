export class Respuesta{
    descripcion: string;
    esCorrecta: boolean;

    constructor(descripcion: string, esCorrecta: boolean){
        this.descripcion = descripcion
        this.esCorrecta = esCorrecta
    }
}