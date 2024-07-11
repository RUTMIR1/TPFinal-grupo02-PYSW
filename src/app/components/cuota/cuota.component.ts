import { Component, OnInit } from '@angular/core';
import { Cuota } from '../../models/cuota';
import { AlquilerService } from '../../services/alquiler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { CommonModule } from '@angular/common';
import { Pago } from '../../models/pago';
import { PagoService } from '../../services/pago.service';

@Component({
  selector: 'app-cuota',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuota.component.html',
  styleUrl: './cuota.component.css'
})
export class CuotaComponent implements OnInit{
  cuotas:any = [];
  pagos:any =[];
  perfil:any;
  idAlquiler:string = "";
  constructor(private alquilerService:AlquilerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,private pagoService:PagoService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.cargarCuotas(params['id']);
      this.idAlquiler = params['id'];
    });
    this.perfil = sessionStorage.getItem('perfil');
  }

  cargarCuotas(id:string):void{
    this.alquilerService.getAlquilerById(id).subscribe(
      (response) => {
        this.cuotas = response.cuotas;
        console.log(this.cuotas);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  cargarPagos(pagos2:any):void{
    this.pagos = [];
    for(let e of pagos2){
      this.pagoService.getPago(e).subscribe(
        (response) => {
          this.pagos.push(response);
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }
  registrarPago(id:string):void{
    this.router.navigate(['pago',id,this.idAlquiler]);
  }
}
