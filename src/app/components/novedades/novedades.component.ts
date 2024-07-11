import { Component } from '@angular/core';
import { Novedad } from '../../models/novedad';
import { Router } from '@angular/router';
import { NovedadService } from '../../services/novedad.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css'
})
export class NovedadesComponent {
  arrayNovedades!: Array<Novedad>;

  constructor( private novedadesService: NovedadService, private router:Router){ 
    this.obtenerNovedades();
  }

  //  OBTENER LAS NOVEDADES DE LA BASE DE DATOS
  obtenerNovedades() {
    this.novedadesService.getNovedades().subscribe(
      data => {
        this.arrayNovedades = data;
        console.log(this.arrayNovedades);
    },
    error =>{
      console.log(error)
    }
  )
  }

}
