"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("./readline");
const repositorio_1 = require("./repositorio");
const usuario_1 = require("./usuario");
class Ui {
    constructor() {
        this.repositorio = new repositorio_1.Repositorio();
        this.user = undefined;
    }
    addUser(user, repositorio, nome, senha, tipo) {
        if (user && (user.nivel_de_acesso == 3)) {
            if (tipo == "admin") {
                repositorio.addUser(new usuario_1.Admin(nome, senha));
            }
            else if (tipo == "professor") {
                repositorio.addUser(new usuario_1.Professor(nome, senha));
            }
            else
                repositorio.addUser(new usuario_1.Aluno(nome, senha));
            readline_1.cout("Usuário cadastrado com sucesso.");
        }
        else if (!user) {
            throw "Nenhum usuário logado.";
        }
        else {
            throw "Seu tipo de usuário não permite essa opção.";
        }
    }
    showUsers(user, repositorio) {
        if (user && (user.nivel_de_acesso == 3)) {
            let mapa = repositorio.getUsers();
            let print = "[ ";
            for (let users of mapa.keys()) {
                print += users + " ";
            }
            print += "]";
            readline_1.cout(print);
        }
        else if (!user) {
            throw "Nenhum usuário logado.";
        }
        else {
            readline_1.cout("[ " + user.nome + " ]");
        }
    }
    login(user) {
        if (user)
            readline_1.cout("Login efetuado.");
        else
            throw "Nome de usuário ou senha inválidos.";
    }
    logout(user) {
        if (user) {
            user = undefined;
            readline_1.cout("Logout efetuado.");
            return user;
        }
        else {
            throw "Nenhum usuário logado.";
        }
    }
    addSemestre(user, repositorio, nome, numero) {
        if (user && (user.nivel_de_acesso == 3)) {
            let mapa = repositorio.getUsers();
            if (mapa.has(nome)) {
                repositorio.addSemestre(mapa.get(nome), numero);
                readline_1.cout("Semestre cadastrado com sucesso.");
            }
            else
                throw "Matrícula não efetuada. Usuário inexistente.";
        }
        else if (!user) {
            throw "Nenhum usuário logado.";
        }
    }
    showSemestres(user, repositorio, nome) {
        if (user && (user.nivel_de_acesso == 3)) {
            let mapa = repositorio.getUsers();
            let print = "[ ";
            if (mapa.has(nome)) {
                for (let semestres of mapa.get(nome).semestre.keys()) {
                    print += semestres + " ";
                }
            }
            print += "]";
            readline_1.cout(print);
        }
        else if (!user) {
            throw "Nenhum usuário logado.";
        }
        else {
            let print = "[ ";
            for (let semestres of user.semestre.keys()) {
                print += semestres + " ";
            }
            print += "]";
            readline_1.cout(print);
        }
    }
    addEmentaDisciplina(user, repositorio, nome, semestre, curso) {
        if (user && (user.nivel_de_acesso == 3)) {
            repositorio.addEmentaDisciplina(nome, semestre, curso);
            readline_1.cout("Ementa adicionada.");
        }
        else if (!user) {
            throw "Nenhum usuário logado.";
        }
        else {
            throw "Seu tipo de usuário não permite essa opção.";
        }
    }
    showEmentas(user, repositorio) {
        if (!user) {
            throw "Nenhum usuário logado.";
        }
        else {
            let mapa = repositorio.showEmentasDisciplinas();
            let print = "[ ";
            for (let disciplina of mapa.values()) {
                print += "Curso: " + disciplina.curso + "; Nome: " + disciplina.nome + "; Semestre: " + disciplina.semestre + " - ";
            }
            print += "]";
            readline_1.cout(print);
        }
    }
    oferecerDisciplina(user, repositorio, nome) {
        if (user && (user.nivel_de_acesso == 3)) {
            if (!repositorio.showEmentasDisciplinas().has(nome))
                throw "Disciplina inexistente.";
            repositorio.oferecerDisciplina(nome);
            readline_1.cout("A disciplina agora está acessível aos alunos.");
        }
        else if (!user) {
            throw "Nenhum usuário logado.";
        }
        else {
            throw "Seu tipo de usuário não permite essa opção.";
        }
    }
    showDisciplinasOfertadas(user, repositorio) {
        if (!user) {
            throw "Nenhum usuário logado.";
        }
        else {
            let mapa = repositorio.showDisciplinasOfertadas();
            let print = "[ ";
            for (let disciplina of mapa.values()) {
                print += "Curso: " + disciplina.curso + "; Nome: " + disciplina.nome + "; Semestre: " + disciplina.semestre + " - ";
            }
            print += "]";
            readline_1.cout(print);
        }
    }
    static interacao() {
        let interacao = new Ui();
        let linhaCmd = "";
        while (linhaCmd != "fim") {
            linhaCmd = readline_1.cin("Digite comando ou help: ");
            let cmd = linhaCmd.split(" ");
            try {
                if (cmd[0] == "help") {
                    let HELP = `
                    help
                    showUsers
                    addUser       _nome _senha _tipo
                    login         _nome _senha
                    logout
                    addSemestre   _nome _numero
                    showSemestres _nome
                    addEmentaDisciplina _nome _semestre _curso?
                    showEmentas
                    oferecerDisciplina  _nome
                    showDisciplinasOfertadas
                    `;
                    readline_1.cout(HELP);
                }
                if (cmd[0] == "addUser") {
                    interacao.addUser(interacao.user, interacao.repositorio, cmd[1], cmd[2], cmd[3]);
                }
                if (cmd[0] == "showUsers") {
                    interacao.showUsers(interacao.user, interacao.repositorio);
                }
                if (cmd[0] == "login") {
                    interacao.user = interacao.repositorio.getUser(cmd[1], cmd[2]);
                    interacao.login(interacao.user);
                }
                if (cmd[0] == "logout") {
                    interacao.user = interacao.logout(interacao.user);
                }
                if (cmd[0] == "addSemestre") {
                    interacao.addSemestre(interacao.user, interacao.repositorio, cmd[1], Number(cmd[2]));
                }
                if (cmd[0] == "showSemestres") {
                    interacao.showSemestres(interacao.user, interacao.repositorio, cmd[1]);
                }
                if (cmd[0] == "addEmentaDisciplina") {
                    interacao.addEmentaDisciplina(interacao.user, interacao.repositorio, cmd[1], Number(cmd[2]), cmd[3]);
                }
                if (cmd[0] == "showEmentas") {
                    interacao.showEmentas(interacao.user, interacao.repositorio);
                }
                if (cmd[0] == "oferecerDisciplina") {
                    interacao.oferecerDisciplina(interacao.user, interacao.repositorio, cmd[1]);
                }
                if (cmd[0] == "showDisciplinasOfertadas") {
                    interacao.showDisciplinasOfertadas(interacao.user, interacao.repositorio);
                }
            }
            catch (e) {
                readline_1.cout("" + e);
            }
        }
    }
}
exports.Ui = Ui;
