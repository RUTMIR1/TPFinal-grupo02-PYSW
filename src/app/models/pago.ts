import { Usuario } from "./usuario";

export class Pago {
    numPago!:number;
    monto!: number;
    estado!: string;
    fecha!: string;
    enlacePago!:string;
    qrPago!: string;
    usuario!:Usuario;

    constructor(numPago?:number,monto?: number, estado?: string, fecha?: string, enlacePago?:string, usuario?: Usuario)
    {
        this.numPago = numPago?? 0;
        this.monto = monto ?? 0;
        this.estado = estado ?? "";
        this.fecha = fecha ?? "";
        this.enlacePago = enlacePago ?? "";
        this.qrPago = "";
        this.usuario = usuario?? new Usuario();
    }
}
