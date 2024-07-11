import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { ApiMethod } from 'ngx-facebook/providers/facebook';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
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
  perfil!: any;
  files: { base64: string, safeurl: SafeUrl }[] = [];
  constructor(
    private fb: FacebookService,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private toastr: ToastrService,
    public loginService: LoginService) {
    if (!this.loginService.userLoggedIn()) {
      this.toastr.error("Debe validarse", 'Ingresar su usuario y clave');
      this.router.navigate(['login']);
    }
  }
  ngOnInit(): void {
    this.perfil = sessionStorage.getItem("perfil");
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
        "access_token": "EAAFAJANFrVwBO3V7QMyhW7f2e02CsTcZBOZA96zj6ZCDx6La8p1AvXSNMvx60DjvbfZClVVK1loV48OFZAZA6w9XKgYZBdWEX2XB4PI0R6vxlZAq57sk9oq9Vkq3PFZBnDvBvNZCHasdzJ5U98RFlaHqtv3nPk5crfT9EbBDZAhecYdPZCdpAdlfUnfzdbCs3D0bRO4JK7AHjBiDEZCZAY40AQqC1ZBQIOE9iwQxdsh"

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


