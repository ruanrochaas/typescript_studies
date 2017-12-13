import {Disciplina_Matriculavel} from "./disciplina";

export class Semestre{
    numero: string;
    ativo: boolean;
    disciplinas: Map<string, Disciplina_Matriculavel>;

    constructor(numero: string, ativo: boolean = true){
        this.numero = numero;
        this.ativo = ativo;
        this.disciplinas = new Map<string, Disciplina_Matriculavel>();
    }
}