export class Local {
    
    _id!:string;
    nombre!: string;
    superficie!: number;
    habilitado!: boolean;
    pathimages!: string;
    alquilado!: boolean;
    costoMes!: number;
    promociones!: [];

    constructor(){
        this.nombre = "";
        this.superficie = 0;
        this.habilitado = true;
        this.pathimages = "";
        this.alquilado = false;
        this.costoMes = 0;
        this.promociones = [];
    }

    // constructor(_id:string, nombre: string, superficie: number, habilitado: boolean, costoMes: number, pathimages: string, alquilado: boolean){
    //     this._id = _id;
    //     this.nombre = nombre;
    //     this.superficie = superficie;
    //     this.habilitado = habilitado;
    //     this.pathimages = pathimages;
    //     this.alquilado = alquilado;
    //     this.costoMes = costoMes;
    //     this.promociones = [];
    // }

}