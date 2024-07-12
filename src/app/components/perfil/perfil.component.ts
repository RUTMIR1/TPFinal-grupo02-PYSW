import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{

  perfil:any;
  idperfil:any;
  usuario:Usuario = new Usuario();
  constructor(private router:Router, private usuarioService:UsuarioService){

  }

  
  ngOnInit(): void {
    this.perfil = sessionStorage.getItem("perfil");
    this.idperfil = sessionStorage.getItem("userid");
    this.obtenerUsuario();
  }

  gestionarLocales():void{
    this.router.navigate(['locales-list']);
  }

  gestionarAlquileres():void{
    this.router.navigate(['alquileres']);
  }
  gestionarUsuarios():void{
    this.router.navigate(['usuarios']);
  }

  gestionarPromociones():void{
    this.router.navigate(['promociones']);
  }

  obtenerUsuario():void{
    this.usuarioService.byUser(this.idperfil).subscribe(
      (response:Usuario) => {
        this.usuario = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  ListarAnuncios(){
    this.router.navigate(['anuncios-list']);
  }
  gestionarPublicaciones(){
    this.router.navigate(['anuncios-form']);
  }
}
