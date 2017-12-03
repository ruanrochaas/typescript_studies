import {Nota} from "./nota";

export class Disciplina{
    nome: string;
    provas: Map<string, number>;

    constructor(nome:string){
        this.nome = nome;
        this.provas = new Map<string, number>();
    }

}