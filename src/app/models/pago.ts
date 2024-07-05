export class Pago {
    _id!: string;
    monto!: number;
    tipo!: string;
    fecha!: string;

    constructor(_id: string, monto: number, tipo: string, fecha: string)
    {
        this._id = _id;
        this.monto = monto;
        this.tipo = tipo;
        this.fecha = fecha;
    }
}
