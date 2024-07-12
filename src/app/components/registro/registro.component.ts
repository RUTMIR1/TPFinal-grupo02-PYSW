import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  accion!:string;
  Usuario!:Usuario;
  perfil!:any;
  constructor(
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private UsuarioService: UsuarioService,
    private router: Router,
    public loginService:LoginService 
  ){
    if(this.loginService.userLoggedIn()){
      this.iniciar();
    }
    else{
      this.toastr.error("Debe validarse", 'Ingresar su usuario y clave');
      this.router.navigate(['login']); 
    }
    
  }


  iniciar(){
    this.Usuario= new Usuario();
  }
 
  ngOnInit(): void {
    this.perfil = sessionStorage.getItem("perfil");
      if(this.perfil=='dueño' || this.perfil=='administrativo'){
            this.activatedRoute.params.subscribe(params => {
              if (params['id'] == "0") {
                this.accion = "new";
                this.cargarForm();
              // console.log(this.ticket._id)
              } else {
                this.accion = "update";
                this.cargarByForm(params['id']);
              
              }
            });
      }else{
        this.toastr.error("No tiene los permisos para esta accion");
        this.router.navigate(['home']); 
      }  
        
}
  cargarForm(): void {
    this.Usuario= new Usuario()
    // Inicializar el formulario con valores vacíos o por defecto
  }

  cargarByForm(id: string): void {
    this.UsuarioService.byUser(id).subscribe(
      data => {
        Object.assign(this.Usuario, data);
        
      },
      error => {
        console.log(error);
      }
    );
  }
  cancelar(){
    this.router.navigate(['/usuarios'])
  }

  actualizar(){
    if(this.Usuario._id!=undefined){
      this.UsuarioService.putUser(this.Usuario).subscribe(
        data => {
          this.toastr.success("Usuario actualizado");
          this.router.navigate(['/usuarios']);
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }
    else{
      this.UsuarioService.postUser(this.Usuario).subscribe(
        data => {
          this.toastr.success("Usuario agregado");
          this.router.navigate(['/usuarios']);
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    }
    
  }
}
