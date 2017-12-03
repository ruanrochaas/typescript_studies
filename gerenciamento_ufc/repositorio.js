"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./usuario");
const semestre_1 = require("./semestre");
class Repositorio {
    constructor() {
        this.usuarios = new Map();
        this.usuarios.set("admin", new usuario_1.Usuario("admin", "admin", true));
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
}
exports.Repositorio = Repositorio;
