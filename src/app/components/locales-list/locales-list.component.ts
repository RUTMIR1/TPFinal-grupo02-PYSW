import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Local } from '../../models/local';
import { LocalService } from '../../services/local.service';
import { Router } from '@angular/router';
import { DataTablesModule } from "angular-datatables";
import { Config } from 'datatables.net';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-locales-list',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './locales-list.component.html',
  styleUrl: './locales-list.component.css'
})
export class LocalesListComponent implements OnInit {

  dtOptions: Config = {};
  mostrar: boolean = true;
  arrayLocales!: Array<Local>;
  toastrSvc = inject(ToastrService);

  constructor(private localService: LocalService, private router: Router) {
    this.obtenerLocales();
  }


  // ME TRAE TODOS LOS LOCALES
  obtenerLocales() {
    this.localService.getLocales().subscribe(
      data => {
        this.arrayLocales = data;
      },
      error => {
        this.toastrSvc.error("No tiene los permisos para esta accion");
      }
    )
  }
  ngOnInit() {
    let usuarioSession = sessionStorage.getItem("perfil") || "nadie";
    if (usuarioSession != "nadie") {
      this.arrayLocales = new Array<Local>();
      this.obtenerLocales();
    } else {
      this.router.navigate(['home']);
    }
  }


  // ADD => ME ENVIA AL FORMULARIO PARA DAR DE ALTA LOCALES
  agregar() {
    this.router.navigate(['locales-form']);
  }

  // UPDATE => ME ENVIA AL FORMULARIO CON LOS DATOS CARGADOS DEL LOCAL PARA SU MODIFICACIÓN
  modificar(id: string) {
    this.router.navigate(['locales-form', id]);
  }


  // DELETE, ELIMINA EL LOCAL
  eliminar(id: string) {
    this.localService.deleteLocal(id).subscribe(
      (result) => {
        if (result.status == 1) {
          this.toastrSvc.error("Local "+ this.localService.getLocalById(id) + " eliminado correctamente", "ERROR DELETE");
          this.obtenerLocales();
        }
      },
      error => {
        this.toastrSvc.error("No se pudo eliminar el Local con id: "+ this.localService.getLocalById(id), "ERROR DELETE");
      }
    );
  }

}
