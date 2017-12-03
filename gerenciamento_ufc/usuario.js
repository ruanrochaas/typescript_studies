"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(nome, senha, admin = false) {
        this.nome = nome;
        this.senha = senha;
        this.admin = admin;
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
