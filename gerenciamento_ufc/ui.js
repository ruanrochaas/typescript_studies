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
    addUser(user, repositorio, nome, senha) {
        if (user && (user.nome == "admin")) {
            repositorio.addUser(new usuario_1.Usuario(nome, senha));
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
        if (user && (user.admin == true)) {
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
        if (user && (user.admin == true)) {
            let mapa = repositorio.getUsers();
            for (let userName of mapa.keys()) {
                if (nome == userName) {
                    repositorio.addSemestre(mapa.get(userName), numero);
                    readline_1.cout("Semestre cadastrado com sucesso.");
                }
            }
            throw "Matrícula não efetuada. Usuário inexistente.";
        }
        else if (!user) {
            throw "Nenhum usuário logado.";
        }
    }
    showSemestres(user, repositorio, nome) {
        if (user && (user.admin == true)) {
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
                    addUser       _nome _senha _admin
                    login         _nome _senha
                    logout
                    addSemestre   _nome _numero
                    showSemestres _nome
                    seguidos      _nome
                    timeline      _nome
                    myTweets      _nome
                    unread        _nome
                    `;
                    readline_1.cout(HELP);
                }
                if (cmd[0] == "addUser") {
                    interacao.addUser(interacao.user, interacao.repositorio, cmd[1], cmd[2]);
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
                /* if (cmd[0] == "twittar"){
                    let user = adm.getUser(cmd[1]);
                    let msg = cmd.slice(2, cmd.length).join(" ");
                    user.twittar(msg);
                }
                
                if (cmd[0] == "timeline"){
                    let user = adm.getUser(cmd[1]);
                    let lista = user.getTimeline();
                    cout("timeline " + user.username);
                    for (let twit of lista){
                        cout(twit.toString())
                    }
                    cout("");
                }
                
                if (cmd[0] == "myTwits"){
                    let user = adm.getUser(cmd[1]);
                    let lista = user.myTwits;
                    cout("myTwits " + user.username);
                    for (let twit of lista){
                        cout(twit.toString())
                    }
                    cout("");
                }

                if (cmd[0] == "unread"){
                    let user = adm.getUser(cmd[1]);
                    let lista = user.getUnread();
                    cout("unread " + user.username);
                    for (let twits of lista){
                        cout(twits.toString());
                    }
                    cout("");
                }

                if (cmd[0] == "like"){
                    let user = adm.getUser(cmd[1]);
                    let lista = user.getTimeline();
                    let teste = false;
                    for (let twits of lista){
                        if(cmd[2] == twits.idTw.toString()){
                            twits.addLike(user);
                            teste = true;
                        }
                    }
                    if (!teste){
                        throw "fail: twit " + cmd[2] +" não existe"
                    }
                    cout("");
            
                } */
            }
            catch (e) {
                readline_1.cout("" + e);
            }
        }
    }
}
exports.Ui = Ui;
