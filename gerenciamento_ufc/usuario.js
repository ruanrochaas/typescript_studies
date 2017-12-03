"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
        this.nivel_de_acesso = 0;
        this.semestre = new Map();
    }
    showSemetres() {
        let print = "[ ";
        for (let semestres of this.semestre.values()) {
            print += semestres.numero + " ";
        }
        print += "]";
    }
}
exports.Usuario = Usuario;
class Admin extends Usuario {
    constructor(nome, senha) {
        super(nome, senha);
        this.nivel_de_acesso = 3;
    }
}
exports.Admin = Admin;
class Professor extends Usuario {
    constructor(nome, senha) {
        super(nome, senha);
        this.nivel_de_acesso = 2;
    }
}
exports.Professor = Professor;
class Aluno extends Usuario {
    constructor(nome, senha) {
        super(nome, senha);
        this.nivel_de_acesso = 1;
    }
}
exports.Aluno = Aluno;
