import { Usuario, Admin } from "./usuario";
import { Semestre } from "./semestre";
import { Disciplina_Ementa, Disciplina_Matriculavel } from "./disciplina";

export class Repositorio{
    private usuarios: Map<string, Usuario>;
    private disciplinas_ementa: Map<string, Disciplina_Ementa>;
    private disciplinas_ofertadas: Map<string, Disciplina_Matriculavel>;

    constructor(){
        this.usuarios = new Map<string, Usuario>();
        this.usuarios.set("admin", new Admin("admin", "admin"));
        this.disciplinas_ementa = new Map<string, Disciplina_Ementa>();
        this.disciplinas_ofertadas = new Map<string, Disciplina_Matriculavel>();
    }

    public addUser(usuario: Usuario): void{
        for(let keys of this.usuarios.keys()){
            if (keys == usuario.nome){
                throw "usuário já cadastrado"
            }
        }
        this.usuarios.set(usuario.nome, usuario);
    }

    public getUser(nome: string, senha: string): Usuario | undefined{
        if (this.usuarios.has(nome)){
            let user = this.usuarios.get(nome);
            if (user.senha == senha){
                return user;
            }
        }
        
        return undefined
    }

    public getUsers(): Map<string, Usuario>{
        return this.usuarios;
    }

    public addSemestre(user: Usuario, numero: number){
        user.semestre.set(numero.toString(),new Semestre(numero))
    }

    public addEmentaDisciplina(nome: string, semestre: number, curso?: string){
        this.disciplinas_ementa.set(nome, new Disciplina_Ementa(nome, semestre, curso));
    }

    public showEmentasDisciplinas(): Map<string, Disciplina_Ementa>{
        return this.disciplinas_ementa;
    }

    public oferecerDisciplina(nome: string){
        this.disciplinas_ofertadas.set(nome, new Disciplina_Matriculavel(nome, this.disciplinas_ementa.get(nome).semestre));
    }

    public showDisciplinasOfertadas(): Map<string, Disciplina_Ementa>{
        return this.disciplinas_ofertadas;
    }
}