import { Respuesta } from "./Respuesta";

export class Pregunta {
    titulo: string;
    puntos: number;
    segundos: number;
    listRespuestas: Respuesta[];

    constructor(titulo: string, puntos: number, segundos: number, listRespuestas: Respuesta[]){
        this.titulo = titulo;
        this.puntos = puntos;
        this.segundos = segundos;
        this.listRespuestas = listRespuestas;
    }
        
}