import { Pago } from "./pago";

export class Cuota {
    monto!: number;
    fechaCuota!: Date;
    fechaVencimiento!: Date;
    estado!: string;
    pago!: Array<Pago>;

    constructor(monto?: number, fechaCuota?: Date, fechaVencimiento?: Date, estado?: string, pago?: Array<Pago>)
    {
        this.monto = monto ?? 0;
        this.fechaCuota = fechaCuota ?? new Date();
        this.fechaVencimiento = fechaVencimiento ?? new Date();
        this.estado = estado ?? "";
        this.pago = pago ?? [];
    }
}
