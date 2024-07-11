import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AlquilerService } from '../../services/alquiler.service';
import { Alquiler } from '../../models/alquiler';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Local } from '../../models/local';
import { ModalComponent } from '../modal/modal.component';
import { Cuota } from '../../models/cuota';

@Component({
  selector: 'app-alquiler',
  standalone: true,
  imports: [DataTablesModule, CommonModule, ModalComponent],
  templateUrl: './alquiler.component.html',
  styleUrl: './alquiler.component.css'
})
export class AlquilerComponent implements OnInit {
  alquileres: Array<Alquiler> = [];
  locales: Array<Local> = [];
  propietarios: Array<string> = [];
  cuotas: Array<Cuota> = [];
  perfil:any;
  userid:any = "";
  constructor(private router:Router,private alquilerService: AlquilerService){
    
  }



  obetenerAlquileres(){
    this.alquilerService.getAlquileres().subscribe(
      (data) => {
        this.alquileres = data;
        console.log(this.alquileres);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit(){
    this.perfil = sessionStorage.getItem('perfil');
    this.userid = sessionStorage.getItem('userid');
    console.log(this.userid);
    if(this.perfil == 'propietario'){
      this.obtenerAlquileresByUser();
    }else{
      this.obetenerAlquileres();
    }
  }

  registrarAlquiler(): void{
    this.router.navigate(['alquileres-form']);    
  }

  modificarAlquiler(id:any):void{
    this.router.navigate(['alquileres-form',id]);
  }

  eliminarAlquiler(id:any):void{
    this.alquilerService.deleteAlquiler(id).subscribe(
      (response) => {
        this.obetenerAlquileres();
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  verCuotas(id:any):void{
    this.router.navigate(['cuota',id]);
  }

  obtenerAlquileresByUser():void{
    this.alquilerService.getAlquileresByUser(this.userid).subscribe(
      (data) => {
        this.alquileres = data;
        console.log(this.alquileres);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
