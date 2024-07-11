import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alquiler } from '../../models/alquiler';
import { AlquilerService } from '../../services/alquiler.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Local } from '../../models/local';
import { LocalService } from '../../services/local.service';
import { Cuota } from '../../models/cuota';
import { CuotaService } from '../../services/cuota.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-alquiler-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alquiler-form.component.html',
  styleUrl: './alquiler-form.component.css'
})
export class AlquilerFormComponent implements OnInit{

  alquiler!:Alquiler;
  propietarios:Array<Usuario> =[];
  locales:Array<Local> = [];
  accion!:string;
  idLocal:string = "";
  idPropietario:string = "";
  intereses:number = 0.2;
  constructor(private router:Router, private activatedRoute:ActivatedRoute,
    private alquilerService:AlquilerService, private usuarioService:UsuarioService,
    private localService:LocalService, private cuotaService:CuotaService
  ){
    this.obtenerLocales();
    this.obtenerPropietarios();
  }

  asignarPropietario():void{
    this.usuarioService.byUser(this.idPropietario).subscribe(
      (response)=>{
        this.alquiler.propietario = response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  asignarLocal():void{
    this.localService.getLocalById(this.idLocal).subscribe(
      (response)=>{
        this.alquiler.local = response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == null) {
        this.accion = "new";
        this.alquiler = new Alquiler();
        this.alquiler.fechaAlquiler = new Date();
      } else {
        this.accion = "update";
        this.alquiler = new Alquiler();
        this.cargarAlquiler(params['id']);
      }
    });
  }

  cargarAlquiler(id:string):void{
    this.alquilerService.getAlquilerById(id).subscribe(
      (response)=>{
        Object.assign(this.alquiler,response);
        this.alquiler.fechaAlquiler = new Date(response.fechaAlquiler);
        this.alquiler.fechaVencimiento = new Date(response.fechaVencimiento);
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  crearAlquiler():void{
    this.generarCuotas();
    console.log(this.alquiler);
    this.alquilerService.addAlquiler(this.alquiler).subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['/alquileres']);
      },
      (error)=>{
        console.log(error);
      } 
    );
  }

  modificarAlquiler():void{
    var id:any = this.alquiler._id;
    this.alquilerService.editAlquiler(this.alquiler, id).subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['/alquileres']);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  obtenerPropietarios():void{
      this.usuarioService.getUsersByPerfil("propietario").subscribe(
        (response)=>{
          this.propietarios = response;
          console.log(response);
        },
        (error)=>{
          console.log(error);
        }
      )
  }
  obtenerLocales():void{
    var vector = [];
    this.localService.getLocales().subscribe(
      (response)=>{
        vector = response;
        for(let e of vector){
          if(e.alquilado == false){
            this.locales.push(e);
          }
        }
        console.log(this.locales);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  CalcularCostoAlquiler():void{
       this.alquiler.costoAlquiler = this.alquiler.plazoMes * this.alquiler.local.costoMes;
  }

  calcularFecha():void{
    const fecha = new Date(this.alquiler.fechaAlquiler);
    fecha.setMonth(fecha.getMonth() + this.alquiler.plazoMes);
    this.alquiler.fechaVencimiento = fecha;
  }

  generarCuotas():void{
    var numCuota = 0;
    var calculoCuota = (this.alquiler.costoAlquiler*this.intereses)+this.alquiler.costoAlquiler;
    var calculoCuota = calculoCuota/6;
    this.alquiler.cuotas = [];
    let fecha = new Date();
      let fecha2 = new Date(fecha);
      fecha.setMonth(fecha.getMonth() - 1);
    for(let i = 1; i <= 6; i++){
      numCuota++; 
      fecha.setMonth(fecha.getMonth() + 1);
      let cuota = new Cuota(undefined,numCuota,calculoCuota,new Date(), new Date(),"NoPagado",[]);
      cuota.fechaCuota = new Date(fecha);
      //let fecha2 = new Date(cuota.fechaCuota);
      fecha2.setMonth(fecha2.getMonth() + 1);
      cuota.fechaVencimiento = new Date(fecha2);
      this.alquiler.cuotas.push(cuota);
      console.log(cuota);
    }
    console.log(this.alquiler.cuotas);
  }

  crearCuota(cuota:Cuota):void{
    this.cuotaService.createCuota(cuota).subscribe(
      (response)=>{
        this.alquiler.cuotas.push()
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  getFormattedDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}