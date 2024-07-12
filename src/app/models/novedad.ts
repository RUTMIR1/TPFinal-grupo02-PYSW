import { Usuario } from "./usuario";

export class Novedad {
    _id!: string;
    fecha!: string;
    descripcion!: string;
    estado!: string;
    usuario!: Usuario;

    constructor(fecha?: string, descripcion?: string, estado?: string){
        this.fecha = fecha ?? "";
        this.descripcion = descripcion ?? "";
        this.estado = estado ?? "";
    }
}
