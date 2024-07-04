export class Local {
    
    _id!:string;
    nombre!: string;
    superficie!: number;
    habilitado!: boolean;
    costomes!: number;
    pathimagen!: string;
    alquilado!: boolean;

    //constructor(){};

    constructor(_id:string,nombre: string,superficie: number, habilitado: boolean, costomes: number, pathimagen: string, alquilado: boolean){
        this._id = _id;
        this.nombre = nombre;
        this.superficie = superficie;
        this.habilitado = habilitado;
        this.costomes = costomes;
        this.pathimagen = pathimagen;
        this.alquilado = alquilado;
    }

}