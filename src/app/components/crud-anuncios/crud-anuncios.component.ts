import { Component } from '@angular/core';
import { Promocion } from '../../models/promocion';
import { Subject } from 'rxjs';
import { PromocionService } from '../../services/promocion.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-crud-anuncios',
  standalone: true,
  imports: [DataTablesModule, CommonModule],
  templateUrl: './crud-anuncios.component.html',
  styleUrl: './crud-anuncios.component.css'
})
export class CrudAnunciosComponent {
  dtOptions: any = {};
  promociones!: Array<Promocion>;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private promocionService: PromocionService, private router: Router){

  }

  obtenerPromociones(){
    this.promocionService.getPromociones().subscribe(
      (data:any) => {
        this.promociones = data;
        this.dtTrigger.next(0);
        console.log(data);
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

  ngOnInit(){
    this.obtenerPromociones();
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

  registrarPromocion(): void{
    this.router.navigate(['anuncios-form'])
  }

  eliminarPromocion(promocion: Promocion){
    this.promocionService.deletePromocion(promocion._id).subscribe(
      (data:any) => {
        let index = this.promociones.indexOf(promocion);
        this.promociones.splice(index,1);
        console.log(data);
      },
      (error:any) => {
        console.log(error);
      }
    )
  }
  
}
