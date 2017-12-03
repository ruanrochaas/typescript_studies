import { Usuario } from "./usuario";
import { Semestre } from "./semestre";

export class Repositorio{
    private usuarios: Map<string, Usuario>;
    constructor(){
        this.usuarios = new Map<string, Usuario>();
        this.usuarios.set("admin", new Usuario("admin", "admin", true));
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
}