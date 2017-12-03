"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./usuario");
const semestre_1 = require("./semestre");
const disciplina_1 = require("./disciplina");
class Repositorio {
    constructor() {
        this.usuarios = new Map();
        this.usuarios.set("admin", new usuario_1.Admin("admin", "admin"));
        this.disciplinas_ementa = new Map();
        this.disciplinas_ofertadas = new Map();
    }
    addUser(usuario) {
        for (let keys of this.usuarios.keys()) {
            if (keys == usuario.nome) {
                throw "usuário já cadastrado";
            }
        }
        this.usuarios.set(usuario.nome, usuario);
    }
    getUser(nome, senha) {
        if (this.usuarios.has(nome)) {
            let user = this.usuarios.get(nome);
            if (user.senha == senha) {
                return user;
            }
        }
        return undefined;
    }
    getUsers() {
        return this.usuarios;
    }
    addSemestre(user, numero) {
        user.semestre.set(numero.toString(), new semestre_1.Semestre(numero));
    }
    addEmentaDisciplina(nome, semestre, curso) {
        this.disciplinas_ementa.set(nome, new disciplina_1.Disciplina_Ementa(nome, semestre, curso));
    }
    showEmentasDisciplinas() {
        return this.disciplinas_ementa;
    }
    oferecerDisciplina(nome) {
        this.disciplinas_ofertadas.set(nome, new disciplina_1.Disciplina_Matriculavel(nome, this.disciplinas_ementa.get(nome).semestre));
    }
    showDisciplinasOfertadas() {
        return this.disciplinas_ofertadas;
    }
}
exports.Repositorio = Repositorio;
