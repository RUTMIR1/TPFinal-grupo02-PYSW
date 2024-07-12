import { Component, ViewChild } from '@angular/core';
import { Novedad } from '../../models/novedad';
import { Subject } from 'rxjs';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { NovedadService } from '../../services/novedad.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-novedades',
  standalone: true,
  imports: [DataTablesModule, CommonModule],
  templateUrl: './crud-novedades.component.html',
  styleUrl: './crud-novedades.component.css'
})
export class CrudNovedadesComponent {
  dtOptions: any = {};
  novedades!: Array<Novedad>;
  dtTrigger: Subject<any> = new Subject<any>(); 
 

  constructor(private novedadService: NovedadService, private router: Router){
    
  }

  obtenerNovedades(){
    this.novedadService.getNovedades().subscribe(
      (data:any) => {
        this.novedades = data;
        this.dtTrigger.next(0);
        console.log(data);
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

  ngOnInit(){
    this.obtenerNovedades();
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

  registrarNovedad(): void{
    this.router.navigate(['novedades-form']);
    //this.router.navigate(['locales-form', id]);
  }

  modificarNovedad(novedad: Novedad)
  { 
    this.router.navigate(['novedades-form', novedad._id]);
  }

  eliminarNovedad(novedad: Novedad){
    this.novedadService.deleteNovedad(novedad._id).subscribe(
      (data:any) => {
        let index = this.novedades.indexOf(novedad);
        this.novedades.splice(index,1);
        console.log(data);
      },
      (error:any) => {
        console.log(error);
      }
    )
  }
}
