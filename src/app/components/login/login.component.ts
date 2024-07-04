import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userform: Usuario = new Usuario();
  returnUrl!: string;
  msglogin!: string;

  constructor(private loginService:LoginService, private router:Router,
    private toastr: ToastrService
  ){
    
  }

  ngOnInit(): void {
    this.returnUrl = '/home';
  }

  login():void{
    this.loginService.login(this.userform.username, this.userform.password).subscribe(
      (response)=>{
        var user = response;
        if(user.status == 1){
          sessionStorage.setItem("user", user.username);
          sessionStorage.setItem("userid", user.userid);
          sessionStorage.setItem("perfil", user.perfil);
          this.router.navigateByUrl(this.returnUrl);
          this.toastr.success("Bienvenido al sistema", 'Login Exitoso');
        }else{
          this.msglogin = "Usuario o contraseña incorrectos";
          this.toastr.error(this.msglogin, 'Error');
        }
      },
      (error)=>{
        this.toastr.error("El usuario o contraseña son incorrectos", 'Usuario No Existe');
      }
    );
  }
}
