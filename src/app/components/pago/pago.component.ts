import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pago } from '../../models/pago';
import { PaymentService } from '../../services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Item } from '../../models/item';
import { PagoService } from '../../services/pago.service';
import { UsuarioService } from '../../services/usuario.service';
import { AlquilerService } from '../../services/alquiler.service';
import { Usuario } from '../../models/usuario';
import { Alquiler } from '../../models/alquiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent implements OnInit {
  
  pago:Pago = new Pago();
  item:Item = new Item();
  userid:any = "";
  idCuota:string = "";
  idAlquiler:string = "";
  user:Usuario = new Usuario();
  alquiler:Alquiler = new Alquiler();
  limiteMonto:number = 0;
  avisoLimite:boolean = true;
  constructor(private paymentService:PaymentService, private router:Router,
    private pagoService:PagoService, private usuarioService:UsuarioService,
    private alquilerService:AlquilerService, private activatedRouter:ActivatedRoute,
    private toastr:ToastrService
  ){
    this.pago.fecha = this.formatDate(new Date());
    this.pago.estado = "Pendiente";
    console.log(this.pago.fecha);
  }

  ngOnInit(): void {
    this.userid = sessionStorage.getItem('userid');
    this.activatedRouter.params.subscribe(params => {
      this.idCuota = params['id'];
      this.idAlquiler = params['idAlquiler'];
      this.obtenerUsuario();
      this.obtenerAlquiler();
    });
    console.log(this.idCuota);
    console.log(this.idAlquiler);
  }
  crearPago():void{
    this.item.description = "El pago de una cuota";
    this.item.category_id = "Varios";
    this.item.title = "Pago";
    this.item.picture_url = "";
    this.item.quantity = 1;
    this.item.unit_price = this.pago.monto;
    let Array:any = [];
    Array.push(this.item);
    this.paymentService.createPayment(Array).subscribe(
      (response) => {
        console.log(response);
        this.pago.enlacePago = response.init_point;
        this.generarPago();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  generarPago():void{
    this.pagoService.createPago(this.pago).subscribe(
      (response) => {
        console.log(response);
      // Buscar la cuota correspondiente y añadir el pago
      for(let e of this.alquiler.cuotas){
        if(this.idCuota == e._id){
          e.pago.push(response.pagoGuardado);
          console.log(e.pago);
          this.limite();
          if(this.limiteMonto == 0){
            e.estado = "Pagado";
          }
          break;
        }
      }
      this.editarAlquiler();
    },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerUsuario():void{
    this.usuarioService.byUser(this.userid).subscribe(
      (response) => {
        this.user = response;
        this.pago.usuario = this.user;
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    )
  }
  obtenerAlquiler():void{
    this.alquilerService.getAlquilerById(this.idAlquiler).subscribe(
      (response) => {
        this.alquiler = response;
        this.limite();
        console.log(this.alquiler);
      },
      (error) => {
        console.error(error);
      }
    )
  }
  editarAlquiler():void{
    this.alquilerService.editAlquiler(this.alquiler, this.idAlquiler).subscribe(
      (response) => {
        console.log(response);
         // Navegar de vuelta a la vista de cuotas
        this.router.navigate(['cuota', this.idAlquiler]);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  limite():void{
    var indice:any ="";
    for(let e of this.alquiler.cuotas){
      if(e._id == this.idCuota){
        this.limiteMonto = e.monto;
        for(let a of e.pago){
              this.limiteMonto -= a.monto;
              console.log(this.limiteMonto);
        }
      }
    }
  }

  controlLimite():void{
    if(this.pago.monto > this.limiteMonto){
      this.avisoLimite = false;
      this.pago.monto = this.limiteMonto;
      this.toastr.error('El monto supera el límite de la cuota', 'Error');
    }else{
      this.avisoLimite = true;
    }
  }



  formatDate(date: Date): string {
    const d = new Date(date);
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();
  
    return [year, month.length < 2 ? '0' + month : month, day.length < 2 ? '0' + day : day].join('-');
  }
}
