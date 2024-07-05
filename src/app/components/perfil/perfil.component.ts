import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private router:Router){

  }

  ngOnInit(): void {
    this.perfil = sessionStorage.getItem("perfil");
    this.idperfil = sessionStorage.getItem("userid");
  }

  gestionarLocales():void{
    this.router.navigate(['locales-list']);
  }
}
