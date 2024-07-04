import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Local } from '../../models/local';
import { LocalService } from '../../services/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locales-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locales-list.component.html',
  styleUrl: './locales-list.component.css'
})
export class LocalesListComponent {

  arrayLocales!: Array<Local>;

  constructor( private localService: LocalService, private router:Router){ 
    this.obtenerLocales();
  }


  // ME TRAE TODOS LOS LOCALES
  obtenerLocales() {
    this.localService.getLocales().subscribe(
      data => {
        this.arrayLocales = data;
        console.log(this.arrayLocales);
    },
    error =>{
      console.log(error)
    }
  )
  }

  // ADD => ME ENVIA AL FORMULARIO PARA DAR DE ALTA LOCALES
  agregar(){
    this.router.navigate(['locales-form']);
  }

 // UPDATE => ME ENVIA AL FORMULARIO CON LOS DATOS CARGADOS DEL LOCAL PARA SU MODIFICACIÓN
  modificar(id: string){
    this.router.navigate(['locales-form', id]);
  }


  // DELETE, ELIMINA EL LOCAL
  eliminar(id:string){
    this.localService.deleteLocal(id).subscribe(
      
      (result) => {
        console.log(result);
        
        if (result.status == 1) {
          alert("Producto eliminado Correctamente")
          this.obtenerLocales();
        }
      },
      error =>{
        console.log(error)
    }
    );
  }




  

}
