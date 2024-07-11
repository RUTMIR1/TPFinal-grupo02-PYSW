import { Cuota } from "./cuota";
import { Local } from "./local";
import { Usuario } from "./usuario";

export class Alquiler {
    _id?: string;
    propietario: Usuario;
    local: Local;
    costoAlquiler: number;
    fechaAlquiler: Date;
    fechaVencimiento: Date;
    plazoMes: number;
    cuotas: Array<Cuota>;
    
    constructor(_id?:string ,propietario?: Usuario, local?: Local, costoAlquiler?: number, fechaAlquiler?:Date, fechaVencimiento?:Date, plazoMes?: number, cuotas?: Array<Cuota>){
        this._id = _id;
        this.propietario = propietario ?? new Usuario();
        this.local = local ?? new Local();
        this.costoAlquiler = costoAlquiler ?? 0;
        this.fechaAlquiler = fechaAlquiler ?? new Date();
        this.fechaVencimiento = fechaVencimiento ?? new Date();
        this.plazoMes = plazoMes ?? 0;
        this.cuotas = cuotas ?? [];
    }
}