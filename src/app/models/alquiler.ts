import { Cuota } from "./cuota";
import { Local } from "./local";
import { Usuario } from "./usuario";

export class Alquiler {
    _id!: string;
    propietario!: Usuario;
    local!: Local;
    costoAlquiler!: number;
    fechaAlquiler!: string;
    fechaVencimiento!: string;
    plazoMes!: number;
    cuotas!: Array<Cuota>;
    
    constructor(_id:string, propietario: Usuario, local: Local, costoAlquiler: number, fechaAlquiler: string, fechaVencimiento: string, plazoMes: number, cuotas: Array<Cuota>)
    {
        this._id = _id;
        this.propietario = propietario;
        this.local = local;
        this.costoAlquiler = costoAlquiler;
        this.fechaAlquiler = fechaAlquiler;
        this.fechaVencimiento = fechaVencimiento;
        this.plazoMes = plazoMes;
        this.cuotas = cuotas;
    }
}
