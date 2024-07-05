import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private UsuarioService: UsuarioService,
    private router: Router 
  ){
    this.iniciar();
  }


  iniciar(){
    this.Usuario= new Usuario();
  }

  ngOnInit(): void {
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
          alert("USUARIO ACTUALIZADO")
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
          alert("USUARIO AGREGADO")
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
