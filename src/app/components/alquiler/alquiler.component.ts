import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AlquilerService } from '../../services/alquiler.service';
import { Alquiler } from '../../models/alquiler';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alquiler',
  standalone: true,
  imports: [DataTablesModule, CommonModule],
  templateUrl: './alquiler.component.html',
  styleUrl: './alquiler.component.css'
})
export class AlquilerComponent implements OnDestroy, OnInit {
  dtOptions: any = {};
  alquileres!: Array<Alquiler>;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private alquilerService: AlquilerService){
    
  }

  obetenerAlquileres(){
    this.alquilerService.getAlquileres().subscribe(
      (data:any) => {
        this.alquileres = data;
        this.dtTrigger.next(0);
        console.log(data);
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

  ngOnInit(){
    this.obetenerAlquileres();
    this.dtOptions = {
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      responsive: true
    }
    
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  registrarAlquiler(): void{
    alert("formulario de alquiler");
  }
}
