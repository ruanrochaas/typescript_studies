import {cin, cout} from "./readline";
import {Repositorio} from "./repositorio";
import {Usuario, Admin, Professor, Aluno} from "./usuario";
import {Disciplina_Matriculavel} from "./disciplina";

export class Ui{
    repositorio: Repositorio;
    user: Usuario | undefined;

    constructor(){
        this.repositorio = new Repositorio();
        this.user = undefined;
    }

    help(user: Usuario){
        let help = "";

        if(user && (user.nivel_de_acesso == 1)){
            help = `
            help
            showUsers
            login         _nome _senha
            logout
            showSemestres _nome
            showEmentas
            showDisciplinasOfertadas
            `;
            cout(help);
        }else if(user && (user.nivel_de_acesso == 2)){
            help = `
            help
            showUsers
            login         _nome _senha
            logout
            addSemestre   _nome _numero
            showSemestres _nome
            showEmentas
            showDisciplinasOfertadas
            `;
            cout(help);
        }else if(user && (user.nivel_de_acesso == 3)){
            help = `
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
            alocarProfessor _nome _disciplina
            `;
            cout(help);
        }else if(!user){
            help = `
            help
            login         _nome _senha
            `;
            cout(help);
        }
    }

    addUser(user: Usuario, repositorio: Repositorio, nome: string, senha: string, tipo: string){
        if(user && (user.nivel_de_acesso == 3)){
            if(tipo == "admin") {
                repositorio.addUser(new Admin(nome, senha))
                cout("Usuário cadastrado com sucesso.");
            }
            else if(tipo == "professor") {
                repositorio.addUser(new Professor(nome, senha))
                cout("Usuário cadastrado com sucesso.");
            }
            else if(tipo == "aluno") {
                repositorio.addUser(new Aluno(nome, senha))
                cout("Usuário cadastrado com sucesso.");
            }
            else {
                cout("Tipo de usuário inexistente.");
            }
            
        }else if(!user){
            throw "Nenhum usuário logado."
        }else {
            throw "Seu tipo de usuário não permite essa opção."
        }
    }

    showUsers(user: Usuario, repositorio: Repositorio){
        if(user && (user.nivel_de_acesso == 3)){
            let mapa = repositorio.getUsers();
            let print = "[ ";
            for(let users of mapa.keys()){
                print += users + " "
            }
            print += "]";
            cout(print);
        }else if(!user){
            throw "Nenhum usuário logado."
        }else{
            cout("[ " + user.nome + " ]");
        }
    }

    login(user: Usuario){
        if(user)
            cout("Login efetuado.")
        else
            throw "Nome de usuário ou senha inválidos."
    }

    logout(user: Usuario): Usuario{
        if(user){
            user = undefined;
            cout("Logout efetuado.");
            return user
        }else{
            throw "Nenhum usuário logado."
        }
    }

    addSemestre(user: Usuario, repositorio: Repositorio, nome: string, numero: number){
        if(user && (user.nivel_de_acesso == 3)){
            let mapa = repositorio.getUsers();
            if(mapa.has(nome)){
                repositorio.addSemestre(mapa.get(nome), numero);
                cout("Semestre cadastrado com sucesso.")
            }else throw "Matrícula não efetuada. Usuário inexistente."
        }else if(!user){
            throw "Nenhum usuário logado."
        }
    }

    showSemestres(user: Usuario, repositorio: Repositorio, nome: string){
        if(user && (user.nivel_de_acesso == 3)){
            let mapa = repositorio.getUsers();
            let print = "[ ";
            if(mapa.has(nome)){
                for(let semestres of mapa.get(nome).semestre.keys()){
                    print += semestres + " "
                }
            }
            print += "]";
            cout(print);
        }else if(!user){
            throw "Nenhum usuário logado."
        }else{
            let print = "[ ";
            for(let semestres of user.semestre.keys()){
                print += semestres + " "
            }
            print += "]";
            cout(print);
        }
    }

    addEmentaDisciplina(user: Usuario, repositorio: Repositorio, nome: string, semestre: number, curso?: string){
        if(user && (user.nivel_de_acesso == 3)){
            repositorio.addEmentaDisciplina(nome, semestre, curso);
            cout("Ementa adicionada.")
        }else if(!user){
            throw "Nenhum usuário logado."
        }else{
            throw "Seu tipo de usuário não permite essa opção."
        }
    }

    showEmentas(user: Usuario, repositorio: Repositorio){
        if(!user){
            throw "Nenhum usuário logado."
        }else{
            let mapa = repositorio.showEmentasDisciplinas();
            let print = "[ ";
            for(let disciplina of mapa.values()){
                print += "Curso: " + disciplina.curso + " - Nome: " + disciplina.nome + " - Semestre: " + disciplina.semestre + "; "
            }
            print += "]";
            cout(print);
        }
    }

    oferecerDisciplina(user: Usuario, repositorio: Repositorio, nome: string){
        if(user && (user.nivel_de_acesso == 3)){
            if(!repositorio.showEmentasDisciplinas().has(nome)) throw "Disciplina inexistente."
            repositorio.oferecerDisciplina(nome);
            cout("A disciplina agora está acessível aos alunos.")
        }else if(!user){
            throw "Nenhum usuário logado."
        }else{
            throw "Seu tipo de usuário não permite essa opção."
        }
    }

    showDisciplinasOfertadas(user: Usuario, repositorio: Repositorio){
        if(!user){
            throw "Nenhum usuário logado."
        }else{
            let mapa = repositorio.showDisciplinasOfertadas();
            let print = "[ ";
            for(let disciplina of mapa.values()){
                print += "Curso: " + disciplina.curso + " - Nome: " + disciplina.nome + " - Semestre: " + disciplina.semestre + " - Professor: " + disciplina.professor + "; "
            }
            print += "]";
            cout(print);
        }
    }

    alocarProfessor(user: Usuario, repositorio: Repositorio, nomeProf: string, nomeDisc: string){
        if(!repositorio.testarProf(nomeProf))
            throw "Professor sem cadastro."
        if(!repositorio.testarDisc(nomeDisc))
            throw "Disciplina não ofertada."
        repositorio.alocarProfessor(nomeDisc, nomeProf);
        cout("Professor Alocado.")
    }

    static interacao(){
        let interacao = new Ui();
        let linhaCmd = "";
        
        while (linhaCmd != "fim"){
            linhaCmd = cin("Digite comando ou help: ");
            let cmd = linhaCmd.split(" ");
            
            try{
                if (cmd[0] == "help"){
                    interacao.help(interacao.user);
                }
                
                if (cmd[0] == "addUser"){
                    interacao.addUser(interacao.user, interacao.repositorio, cmd[1] ,cmd[2], cmd[3]);
                }
                
                if (cmd[0] == "showUsers"){
                    interacao.showUsers(interacao.user, interacao.repositorio);
                }
                
                if (cmd[0] == "login"){
                    interacao.user = interacao.repositorio.getUser(cmd[1], cmd[2]);
                    interacao.login(interacao.user);
                }

                if (cmd[0] == "logout"){
                    interacao.user = interacao.logout(interacao.user);
                }
                
                if (cmd[0] == "addSemestre"){
                    interacao.addSemestre(interacao.user, interacao.repositorio, cmd[1], Number(cmd[2]));
                }
                
                if (cmd[0] == "showSemestres"){
                    interacao.showSemestres(interacao.user, interacao.repositorio, cmd[1]);
                }

                if (cmd[0] == "addEmentaDisciplina"){
                    interacao.addEmentaDisciplina(interacao.user, interacao.repositorio, cmd[1], Number(cmd[2]), cmd[3]);
                }
                
                if (cmd[0] == "showEmentas"){
                    interacao.showEmentas(interacao.user, interacao.repositorio);
                }

                if (cmd[0] == "oferecerDisciplina"){
                    interacao.oferecerDisciplina(interacao.user, interacao.repositorio, cmd[1]);
                }

                if (cmd[0] == "showDisciplinasOfertadas"){
                    interacao.showDisciplinasOfertadas(interacao.user, interacao.repositorio);
                }

                if (cmd[0] == "alocarProfessor"){
                    interacao.alocarProfessor(interacao.user, interacao.repositorio, cmd[1], cmd[2]);
                }
            }catch(e){
                cout("" + e);
            }
        }
    }
}