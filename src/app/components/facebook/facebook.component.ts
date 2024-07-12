import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { ApiMethod } from 'ngx-facebook/providers/facebook';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { Promocion } from '../../models/promocion';
import { PromocionService } from '../../services/promocion.service';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facebook',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './facebook.component.html',
  styleUrl: './facebook.component.css'
})



export class FacebookComponent implements OnInit {
  mensaje: string = "";
  perfil!:any;
  promocion!: Promocion;
  files: { base64: string, safeurl: SafeUrl }[] = [];
  constructor(private fb: FacebookService, private router: Router, private toastr: ToastrService, public loginService: LoginService, public promocionService: PromocionService) {
    if (!this.loginService.userLoggedIn()) {
      this.toastr.error("Debe validarse", 'Ingresar su usuario y clave');
      this.router.navigate(['login']);
    }
  }
  ngOnInit(): void {
    this.perfil = sessionStorage.getItem("perfil");
    this.promocion = new Promocion();
    if (this.perfil == 'dueño' || this.perfil == 'administrativo' || this.perfil == 'propietario') {
      this.iniciarFb();
    } else {
      this.toastr.error("No tiene los permisos para esta accion");
      this.router.navigate(['home']);
    }
  }
 
  postFb() {
    var apiMethod: ApiMethod = "post";
    this.fb.api('/316071514932229/feed', apiMethod,
      {
        "message": this.mensaje,
        "access_token": "EAAFAJANFrVwBOZBaoWnRVcjdzcDzMh1rPZBdBKZCNB6ZCQZC971jIPriZAYQs3eV9S8BwZABPk6ZCXpJwTah8UCLY8l5AXBvTmpsDSTRHZCtepns96S9923DgbHLmm4SJZAGAIiLVxRbgt95gCZCUYYDhVZBngWa883ddJ8Ta5LlVxap1IZBsKFCA0N8aMctUxwnwgRdyShbv5zMaZCneoZCV09yq4Qj1ZACUW2K7njr"

      }).then((response:any)=>{
        if(response && response.id){
          this.promocion.descripcion = this.mensaje;
          this.promocion.pathing = response.id;
          this.promocionService.addPromocion(this.promocion).subscribe(
            (result) => {
              if (result.status == 1) {
                this.toastr.success('Publicacion guardado con exito!!!', 'PUBLIACION GUARDADA', {
                  timeOut: 6000,
                });
                this.router.navigate(['anuncios-list']);
              }
            },
            // ERROR AL GUARDAR EL ANUNCIO
            error => {
              this.toastr.error('No se pudo guardar la publicacion SORY :(', 'ERROR AL GUARDAR PUBLICACIÓN', {
                timeOut: 6000,
              });
              this.router.navigate(['locales-list']);
            }
          );
          this.toastr.success("Publicación agregada a facebook");
        } else {
          this.toastr.error("Publicación no agregada");
        }
      });
    this.toastr.success("publicacion agregada a facebook");
  }
  iniciarFb() {
    let initParams: InitParams = {
      appId: '351998394608988',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v7.0'
    };
    this.fb.init(initParams);
  }
  redirigir() {
    this.router.navigate(['/home']);
  }
  /*
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
        console.log(safeurl)
        this.files.push({ 'base64': base64, 'safeurl': safeurl });
      };
      //hago que el reader lea un archivo
      reader.readAsDataURL(file);
    }
  }
*/
}


