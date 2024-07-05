import { Pago } from "./pago";

export class Cuota {
    _id!: string;
    monto!: number;
    fechaCuota!: string;
    fechaVencimiento!: string;
    estado!: string;
    pago!: Pago;

    constructor(_id: string, monto: number, fechaCuota: string, fechaVencimiento: string, estado: string, pago: Pago)
    {
        this._id = _id;
        this.monto = monto;
        this.fechaCuota = fechaCuota;
        this.fechaVencimiento = fechaVencimiento;
        this.estado = estado;
        this.pago = pago;
    }
}
