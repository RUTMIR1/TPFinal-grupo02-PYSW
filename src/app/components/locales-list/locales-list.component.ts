import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Local } from '../../models/local';
import { LocalService } from '../../services/local.service';
import { Router } from '@angular/router';
import { DataTablesModule } from "angular-datatables";
import { Config } from 'datatables.net';
import { config, Subject } from 'rxjs';

@Component({
  selector: 'app-locales-list',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './locales-list.component.html',
  styleUrl: './locales-list.component.css'
})
export class LocalesListComponent implements OnInit, AfterViewInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  arrayLocales!: Array<Local>;

  constructor(private localService: LocalService, private router: Router) {
    this.obtenerLocales();
  }


  // ME TRAE TODOS LOS LOCALES
  obtenerLocales() {
    this.localService.getLocales().subscribe(
      data => {
        this.arrayLocales = data;
        console.log(this.arrayLocales);
        this.dtTrigger.next(0);
      },
      error => {
        console.log(error)
      }
    )
  }
  ngOnInit() {
    let usuarioSession = sessionStorage.getItem("perfil") || "nadie";
    if (usuarioSession != "nadie") {
      this.arrayLocales = new Array<Local>();
      this.obtenerLocales();
      // this.dtOptions = {
      //   language: {
      //     url: 'https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      //   },
      //   responsive: true
      // }
    } else {
      this.router.navigate(['home']);
    }


  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
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
        console.log(result);

        if (result.status == 1) {
          alert("Producto eliminado Correctamente")
          this.obtenerLocales();
        }
      },
      error => {
        console.log(error)
      }
    );
  }


  ngAfterViewInit(): void {
    this.dtOptions = {
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      responsive: true
    };

    // Inicializa DataTables
    // $(document).ready(() => {
    //   $('#example').DataTable(this.dtOptions);
    // });
  }



}
