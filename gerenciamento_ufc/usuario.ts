import {Semestre} from "./semestre";

export class Usuario{
    nome: string;
    senha: string;
    nivel_de_acesso: number;
    semestre: Map<string, Semestre>;
    
    constructor(nome: string, senha: string){
        this.nome = nome;
        this.senha = senha;
        this.nivel_de_acesso = 0;
        this.semestre = new Map<string, Semestre>();
    }

    public showSemetres(){
        let print = "[ ";
        for(let semestres of this.semestre.values()){
            print += semestres.numero + " "
        }
        print += "]";    
    }
}

export class Admin extends Usuario{
    constructor(nome: string, senha: string){
        super(nome, senha);
        this.nivel_de_acesso = 3;
    }
}

export class Professor extends Usuario{
    constructor(nome: string, senha: string){
        super(nome, senha);
        this.nivel_de_acesso = 2;
    }
}

export class Aluno extends Usuario{
    constructor(nome: string, senha: string){
        super(nome, senha);
        this.nivel_de_acesso = 1;
    }
}