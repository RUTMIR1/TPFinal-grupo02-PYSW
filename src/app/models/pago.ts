import { Usuario } from "./usuario";

export class Pago {
    monto!: number;
    estado!: string;
    fecha!: string;
    enlacePago!:string;
    usuario!:Usuario;

    constructor(monto?: number, estado?: string, fecha?: string, enlacePago?:string, usuario?: Usuario)
    {
        this.monto = monto ?? 0;
        this.estado = estado ?? "";
        this.fecha = fecha ?? "";
        this.enlacePago = enlacePago ?? "";
        this.usuario = usuario?? new Usuario();
    }
}
