import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud-usuarios',
  standalone: true,
  imports: [CommonModule,DataTablesModule,FormsModule],
  templateUrl: './crud-usuarios.component.html',
  styleUrl: './crud-usuarios.component.css'
})
export class CrudUsuariosComponent {
  Usuarios: Array<Usuario>=[];
  tipo:string="";
  mostrar:boolean=false;
  perfil!:any;

  constructor(private toastr: ToastrService,private UsuarioService: UsuarioService, private router: Router, public loginService:LoginService){  
   if(!this.loginService.userLoggedIn()){
    this.toastr.error("Debe validarse", 'Ingresar su usuario y clave');
    this.router.navigate(['login']); 
  }
}
ngOnInit():void{
  this.perfil = sessionStorage.getItem("perfil");
  if(this.perfil=='dueño' || this.perfil=='administrativo'){
    this.MostrarUsuarios();
  }else{
    this.toastr.error("No tiene los permisos para esta accion");
    this.router.navigate(['home']); 
  }
}
MostrarUsuarios(){
  this.UsuarioService.getUser().subscribe(
    data =>{
      this.Usuarios=data;
      this.mostrar=false;
      console.log(data);
    },
    error =>{
      console.log(error);
    }
  )
}

ModificarUsuario(id:string){
  this.router.navigate(['registro/',id])
}
EliminarUsuario(id:string){
  this.UsuarioService.deleteUser(id).subscribe(
   data =>{
      alert("Usuario Eliminado")
      this.MostrarUsuarios();
    },
   error =>{
      console.log(error)
    }
    )
}
NuevoUser(){
  this.router.navigate(['registro/',0])
}
TipoPerfil(){
  this.UsuarioService.getUsersByPerfil(this.tipo).subscribe(
    (data) => {
      this.Usuarios = data;
      console.log(this.Usuarios);
    },
    error => {
      console.log(error);
    }
  );
}
MostrarForm(){
  this.mostrar=true;
}

}
