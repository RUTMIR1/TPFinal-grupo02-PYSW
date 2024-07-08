import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-crud-usuarios',
  standalone: true,
  imports: [CommonModule,DataTablesModule],
  templateUrl: './crud-usuarios.component.html',
  styleUrl: './crud-usuarios.component.css'
})
export class CrudUsuariosComponent {
  Usuarios: Array<Usuario>=[];


  constructor(private UsuarioService: UsuarioService, private router: Router){
   this.MostrarUsuarios();
}
MostrarUsuarios(){
  this.UsuarioService.getUser().subscribe(
    data =>{
      this.Usuarios=data;
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
  this.router.navigate(['registro'])
}

}
