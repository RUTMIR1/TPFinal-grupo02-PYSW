export class Usuario {
    _id!:string;
    nombre:string;
    apellido: string;
    email:string;
    username:string;
    password:string;
    telefono: number;
    perfil:string;

    constructor(){
        this.nombre="";
        this.apellido="";
        this.email="";
        this.username="";
        this.password="";
        this.telefono=0;
        this.perfil="";
    }
}
