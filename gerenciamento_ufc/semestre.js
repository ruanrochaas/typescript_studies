"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Semestre {
    constructor(numero, ativo = true) {
        this.numero = numero;
        this.ativo = ativo;
        this.disciplinas = new Map();
    }
}
exports.Semestre = Semestre;
