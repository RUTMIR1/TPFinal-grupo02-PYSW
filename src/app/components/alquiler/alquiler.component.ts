import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AlquilerService } from '../../services/alquiler.service';
import { Alquiler } from '../../models/alquiler';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Local } from '../../models/local';

@Component({
  selector: 'app-alquiler',
  standalone: true,
  imports: [DataTablesModule, CommonModule],
  templateUrl: './alquiler.component.html',
  styleUrl: './alquiler.component.css'
})
export class AlquilerComponent implements OnInit {
  alquileres: Array<Alquiler> = [];
  locales: Array<Local> = [];
  propietarios: Array<string> = [];

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
    this.obetenerAlquileres();
  }

  registrarAlquiler(): void{
    this.router.navigate(['alquileres-form']);    
  }

  modificarAlquiler(id:string):void{
    this.router.navigate(['alquileres-form',id]);
  }

  eliminarAlquiler(id:string):void{
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
}
