"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Disciplina_Ementa {
    constructor(nome, semestre, curso = "Design Digital") {
        this.curso = curso;
        this.nome = nome;
        this.semestre = semestre;
    }
}
exports.Disciplina_Ementa = Disciplina_Ementa;
class Disciplina_Matriculavel extends Disciplina_Ementa {
    constructor(nome, semestre) {
        super(nome, semestre);
        this.provas = new Map();
    }
}
exports.Disciplina_Matriculavel = Disciplina_Matriculavel;
