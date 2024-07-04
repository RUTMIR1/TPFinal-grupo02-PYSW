import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Local } from '../../models/local';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //arrayLocales!: Array<Local>;

  arrayLocales!:Array<Local>;

  constructor( private localService: LocalService, private router:Router){ 
    this.obtenerLocales();
  }

      //  OBTENER LOS LOCALES DE LA BASE DE DATOS
  obtenerLocales() {
    
    this.localService.getLocales().subscribe(
      
      data => {
        this.arrayLocales = data;
        console.log(this.arrayLocales);
        
    },
    error =>{
      console.log(error)
    }
  )
  }



}