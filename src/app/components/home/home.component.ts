import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Local } from '../../models/local';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //arrayLocales!: Array<Local>;

  //TESTEO SIN BD
  arrayLocales = [
    new Local("1",'P1L23', 10, true, 1500, 'galeriatest.jpg', false),
    new Local("2",'P2L3', 15, false, 2000, 'galeriatest.jpg', true),
    new Local("3",'P1L2', 20, true, 2500, 'galeriatest.jpg', true),
    new Local("4",'P3L9', 25, false, 3000, 'galeriatest.jpg', false),
  ]

  constructor(private router:Router){ // private productoService: ProductoService,
    // this.obtenerLocales();
  }

        //OBTENER LOS LOCALES DE LA BASE DE DATOS
  // obtenerProductos() {
    
  //   this.productoService.getProductos().subscribe(
      
  //     data => {
  //       this.productos = data;
  //       console.log(this.productos);
        
  //   },
  //   error =>{
  //     console.log(error)
  //   }
  // )
  // }



}