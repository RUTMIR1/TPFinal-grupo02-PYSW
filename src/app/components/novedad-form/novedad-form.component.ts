import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../models/usuario';
import { Novedad } from '../../models/novedad';
import { NovedadService } from '../../services/novedad.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-novedad-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './novedad-form.component.html',
  styleUrl: './novedad-form.component.css'
})
export class NovedadFormComponent implements OnInit{

  userid!: string;
  accion!: string;
  toastrSvc = inject(ToastrService);

  novedad!: Novedad;
  usuarios: Array<Usuario> = new Array<Usuario>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private domSanitizer: DomSanitizer, private novedadService: NovedadService, 
    private usuarioService: UsuarioService
  )
  {
    this.cargarUsuarios();
    this.iniciarNovedad();
    
  }

  ngOnInit(): void
  {
    let usuarioSession = sessionStorage.getItem("perfil") || "nadie";
    

    if (usuarioSession != "nadie") {
      let safeurl: SafeUrl = this.domSanitizer;
      this.activatedRoute.params.subscribe(params => {
        if (params['id'] == undefined) {
          this.accion = "new";
        } else {
          this.accion = "update";
          this.cargarNovedad(params['id']);
        }
      })
    } else {
      this.toastrSvc.error("No tiene los permisos para esta accion");
      this.router.navigate(['home']);
    }
  }

  iniciarNovedad()
  {
    this.userid = sessionStorage.getItem('userid') || "";
    this.novedad = new Novedad();
    this.usuarioService.byUser(this.userid).subscribe(
      (data:any) => {
        
        this.novedad.usuario = data;
        this.novedad.usuario = this.usuarios.find(usuario => (usuario._id === this.novedad.usuario._id))!;
      },
      (error:any) =>{
        console.log(error);
      }
    )
  }

  cargarNovedad(id: string)
  {
    this.novedadService.getNovedadByID(id).subscribe(
      (data:any) =>
      {
        this.novedad = data;
        this.novedad.usuario = this.usuarios.find(usuario => (usuario._id === this.novedad.usuario._id))!;
        console.log(data);
      },
      (error:any) =>
      {
        console.log(error);
      }
    )
  }

  cargarUsuarios()
  {
    this.usuarioService.getUsersByPerfil("administrativo").subscribe(
      (response)=>{
        this.usuarios.push(...response);
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
    this.usuarioService.getUsersByPerfil("dueño").subscribe(
      (response)=>{
        this.usuarios.push(...response);
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  volver()
  {
    this.router.navigate(['novedades-list']);
  }

  registrar()
  {
    
    this.novedadService.addNovedad(this.novedad).subscribe(
      (data:any) => 
      {
        console.log(data);
        this.router.navigate(['novedades-list'])
      },
      (error:any) =>
      {
        console.log(error);
      }
    )
  }

  modificar()
  {
    this.novedadService.editNovedad(this.novedad).subscribe(
      (data:any) => {
        console.log(data);
        this.router.navigate(['novedades-list'])
      },
      (error:any) => {
        console.log(error);
      }
    )
  }
}
