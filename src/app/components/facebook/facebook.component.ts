import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { ApiMethod } from 'ngx-facebook/providers/facebook';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-facebook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './facebook.component.html',
  styleUrl: './facebook.component.css'
})



export class FacebookComponent implements OnInit {
  mensaje: string = "";
  perfil!:any;
  constructor(private fb: FacebookService, private router: Router, private toastr: ToastrService, public loginService: LoginService) {
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
    this.fb.api('/385195447990917/feed', apiMethod,
      {
        "message": this.mensaje,
        "access_token": "EAAOqRvqQpeYBO9xFqEf5BdpcJfsKEFo7mERH6E5ZC1jlnFrwQC8bVG70Y2UWlbaVC79yFAPB3eztsnCNs50huSexiaHPYs9pinsl4f5xWSWWGVyfEmIBeSxPQM0dY6hQx9lcXZCibJuVcxgKKp7ixZBMsBlVZBIokbbZA1ITQqbeALV0Oou8dnOp1D8YHftalJ0vTM3OtiFUVcaOyZCqKR1NOf6AZDZD"

      });
    this.toastr.success("publicacion agregada a facebook");
  }
  iniciarFb() {
    let initParams: InitParams = {
      appId: '1031646758348262',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v7.0'
    };
    this.fb.init(initParams);
  }
  redirigir() {
    this.router.navigate(['/home']);
  }

}


