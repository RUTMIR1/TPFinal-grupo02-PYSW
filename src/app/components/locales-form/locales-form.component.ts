import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Local } from '../../models/local';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalesListComponent } from '../locales-list/locales-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from '../../services/local.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SafeCall } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-locales-form',
  standalone: true,
  imports: [FormsModule, CommonModule, LocalesListComponent],
  templateUrl: './locales-form.component.html',
  styleUrl: './locales-form.component.css'
})
export class LocalesFormComponent implements OnInit {

  Local!: Local;

  accion: string = "new";

  files: { base64: string, safeurl: SafeUrl }[] = [];
  imagen64!: string;
  //files!: { base64: string, safeurl: SafeUrl }[] = [];
  toastrSvc = inject(ToastrService);

  @ViewChild('selectHabilitado') selectHabilitadoRef!: ElementRef;

  ngAfterViewInit() {
    // Acceder al valor seleccionado del select
    //console.log(this.selectHabilitadoRef.nativeElement.value);
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private localService: LocalService, private domSanitizer: DomSanitizer) {
    this.iniciarVariable();
  }


  // NG ONINIT 
  ngOnInit(): void {
    let usuarioSession = sessionStorage.getItem("perfil") || "nadie";

    if (usuarioSession != "nadie") {
      let safeurl: SafeUrl = this.domSanitizer;
      //this.files.push({ 'base64': "", 'safeurl': safeurl });
      this.activatedRoute.params.subscribe(params => {
        if (params['id'] == undefined) {
          this.accion = "new";
        } else {
          this.accion = "update";
          this.cargarLocal(params['id']);
        }
      })
    } else {
      this.router.navigate(['home']);
    }

  };


  // INSTANCIAR EL OBJETO LOCAL
  iniciarVariable(): void {
    this.Local = new Local();
  }


  //CREAR LOCAL
  registrar(): void {
    //console.log(this.Local);
    try {
      this.Local.pathimages = this.files[0].base64 || "";
      this.Local.alquilado = false;
      this.Local.promociones.push();
    } catch (error) {
      console.log("ESTOY ACÁ ERROR");
    }
    //
    if (this.Local.nombre && this.Local.superficie && this.Local.habilitado && this.Local.alquilado !== null && this.Local.costoMes && this.Local.pathimages) {
      try {
        this.localService.add(this.Local).subscribe(
          (result) => {
            if (result.status == 1) {
              this.toastrSvc.success('Local guardado con exito!!!', 'LOCAL GUARDADO', {
                timeOut: 6000,
              });
              this.router.navigate(['locales-list']);
            }
          },
          // ERROR AL GUARDAR EL LOCAL
          error => {
            this.toastrSvc.error('No se pudo guardar el local SORY :(', 'ERROR AL GUARDAR LOCAL', {
              timeOut: 6000,
            });
            this.router.navigate(['locales-list']);
          }
        );
      } catch (error) {
        //ERROR AL GUARDAR EL LOCAL
        this.toastrSvc.error('No se pudo guardar el local', 'ERROR AL GUARDAR LOCAL', {
          timeOut: 6000,
        });
        this.router.navigate(['locales-list']);
      }
      this.Local = new Local();
    } else {
      //LLENAR TODOS LOS CAMPOS
      this.toastrSvc.warning('Por favor llene todos los campos del formulario >:|', 'ERROR ENVIO DE FORMULARIO', {
        timeOut: 6000,
      });
      this.router.navigate(['locales-form']);
    }

  }


  // CARGA DE LOCAL
  cargarLocal(id: string): void {
    this.localService.getLocalById(id).subscribe(
      (result) => {
        Object.assign(this.Local, result);
        this.toastrSvc.info("El local " + this.Local.nombre + " está listo para editar", "Local Encontrado", {
          timeOut: 5000
        });
      },
      error => {
        console.log(error)
        this.toastrSvc.error("El local " + this.Local.nombre + " no se encontró", "ERROR", {
          timeOut: 4000
        });
      }
    );
    //this.Local = new Local();
  }

  //UPDATE DE LOCAL
  actualizar() {
    if (this.files.length != 0) {
      this.Local.pathimages = this.files[0].base64;
    }
    this.localService.update(this.Local).subscribe(
      (result) => {
        if (result.status == 1) {
          this.router.navigate(['locales-list']);
          this.toastrSvc.success("El local " + this.Local.nombre + " ha sido actualizado con éxito", "LOCAL ACTUALIZADO", {
            timeOut: 5000
          });
        }
      },
      error => {
        console.log(error)
        this.toastrSvc.error("El local " + this.Local.nombre + " no se pudo actualizar", "ERROR", {
          timeOut: 4000
        });
      }
    );
    this.Local = new Local();
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      //inicio lector de archivo
      const reader = new FileReader();
      //declaro el comportamiento del onload cuando el reader carga o lee algo
      reader.onload = () => {
        let base64 = reader.result as string;
        let safeurl: SafeUrl = this.domSanitizer.bypassSecurityTrustUrl(base64);
        this.files.push({ 'base64': base64, 'safeurl': safeurl });
      };
      //hago que el reader lea un archivo
      reader.readAsDataURL(file);
    }
  }
  //PONER EL VALOR DEL HABILITADO
  onChangeHabilitado() {
    this.Local.habilitado = this.selectHabilitadoRef.nativeElement.value
  }

  //BTN CANCELAR
  cancelar() {
    this.Local = new Local;
    this.router.navigate(['locales-list']);
  }












}
