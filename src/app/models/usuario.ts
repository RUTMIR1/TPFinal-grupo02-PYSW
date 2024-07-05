export class Usuario {
    _id!:string;
    nombre:string;
    apellido:string;
    email:string;
    username:string;
    password:string;
    telefono:number;
    perfil:string;

    constructor(nombre?:string,apellido?:string,email?:string,username?:string,password?:string
        ,telefono?:number,perfil?:string){
        this.nombre = nombre ?? "";
        this.apellido = apellido ?? "";
        this.email = email ?? "";
        this.username = username ?? "";
        this.password = password ?? "";
        this.telefono = telefono ?? 0;
        this.perfil = perfil ?? "";
    }
}
