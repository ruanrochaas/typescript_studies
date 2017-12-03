import {Nota} from "./nota";

export class Disciplina_Ementa{
    curso: string;
    nome: string;
    semestre: number;

    constructor(nome:string, semestre: number, curso: string = "Design Digital"){
        this.curso = curso;
        this.nome = nome;
        this.semestre = semestre;
    }

}

export class Disciplina_Matriculavel extends Disciplina_Ementa{
    provas: Map<string, number>;

    constructor(nome:string, semestre: number){
        super(nome, semestre);
        this.provas = new Map<string, number>();
    }

}