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
    professor: string;

    constructor(nome:string, semestre: number, professor: string = ""){
        super(nome, semestre);
        this.provas = new Map<string, number>();
        this.professor = professor;
    }

    setProfessor(nomeDoProfessor: string){
        this.professor = nomeDoProfessor;
    }

    calcularMedia(): number{
        let soma_das_notas = 0;
        for(let nota of this.provas.values()){
            soma_das_notas += nota;
        }
        let media: number = soma_das_notas/(this.provas.size);
        return media
    }
}