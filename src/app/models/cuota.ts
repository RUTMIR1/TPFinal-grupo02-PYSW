import { Pago } from "./pago";

export class Cuota {
    _id!: any;
    numeroCuota!:number;
    monto!: number;
    fechaCuota!: Date;
    fechaVencimiento!: Date;
    estado!: string;
    pago!: Array<Pago>;

    constructor(_id?:string,numeroCuota?:number , monto?: number, fechaCuota?: Date, fechaVencimiento?: Date, estado?: string, pago?: Array<Pago>)
    {
        this._id = _id;
        this.numeroCuota = numeroCuota?? 0;
        this.monto = monto ?? 0;
        this.fechaCuota = fechaCuota ?? new Date();
        this.fechaVencimiento = fechaVencimiento ?? new Date();
        this.estado = estado ?? "";
        this.pago = pago ?? [];
    }
}
