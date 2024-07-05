import { Usuario } from "./usuario";

export class Novedad {
    _id!: string;
    fecha!: string;
    descripcion!: string;
    estado!: string;
    usuario!: Usuario;

    constructor(_id: string, fecha: string, descripcion: string, estado: string, usuario: Usuario){
        this._id = _id;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.estado = estado;
        this.usuario = usuario;
    }
}
