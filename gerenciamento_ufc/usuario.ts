import {Semestre} from "./semestre";

export class Usuario{
    nome: string;
    senha: string;
    admin: boolean;
    semestre: Map<string, Semestre>;
    
    constructor(nome: string, senha: string, admin: boolean = false){
        this.nome = nome;
        this.senha = senha;
        this.admin = admin;
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