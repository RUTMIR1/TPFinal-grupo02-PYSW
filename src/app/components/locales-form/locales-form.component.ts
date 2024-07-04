import { Component } from '@angular/core';
import { Local } from '../../models/local';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalesListComponent } from '../locales-list/locales-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-locales-form',
  standalone: true,
  imports: [FormsModule,CommonModule,LocalesListComponent],
  templateUrl: './locales-form.component.html',
  styleUrl: './locales-form.component.css'
})
export class LocalesFormComponent {

  Local!: Local;

  accion: string = "new";

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private localService:LocalService ){
    this.iniciarVariable();
  }


  // NG ONINIT 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == undefined){
        
        
        this.accion = "new";
      }else{
        this.accion = "update";
        console.log(params['id']);
        this.cargarLocal(params['id']);
      }
  })};


  // INSTANCIAR EL OBJETO LOCAL
  iniciarVariable():void {
    this.Local = new Local();
  }


  //CREAR LOCAL
  registrar():void {
    this.localService.add(this.Local).subscribe(
      (result) => {
        console.log(result);
        
        if (result.status == 1) {
          alert("Local Cargado")
          this.router.navigate(['locales-list']);
        }
      },
      error =>{
        console.log(error)
    }
    );
    this.Local = new Local();
  }


  // CARGA DE LOCAL
  cargarLocal(id:string):void{
    this.localService.getLocalById(id).subscribe(
      (result) => {
       Object.assign(this.Local,result);
      }, 
      error =>{
        console.log(error)
    }
    );
    this.Local = new Local();
  }

  //UPDATE DE LOCAL
  actualizar(){
    this.localService.update(this.Local).subscribe(
      (result) => {
        console.log(result);
        
        if (result.status == 1) {
          alert("Local Actualizado")
          this.router.navigate(['locales-list']);
        }
      },
      error =>{
        console.log(error)
    }
    );
    this.Local = new Local();
  }















}
