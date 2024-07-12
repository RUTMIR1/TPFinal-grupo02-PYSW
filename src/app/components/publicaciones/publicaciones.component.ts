import { Component } from '@angular/core';
import { PromocionService } from '../../services/promocion.service';
import { Promocion } from '../../models/promocion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent {
  promocion!: Promocion;
  arrayPromociones!:Array<Promocion>;
  url!:string;

  constructor( private promocionService: PromocionService) {
    this.arrayPromociones = new Array<Promocion>();
    this.obtenerPromociones();
    //this.url = "https://graph.facebook.com/v12.0/${" + this.arrayPromociones[0].pathing + "}?access_token=${" +"EAAFAJANFrVwBO3V7QMyhW7f2e02CsTcZBOZA96zj6ZCDx6La8p1AvXSNMvx60DjvbfZClVVK1loV48OFZAZA6w9XKgYZBdWEX2XB4PI0R6vxlZAq57sk9oq9Vkq3PFZBnDvBvNZCHasdzJ5U98RFlaHqtv3nPk5crfT9EbBDZAhecYdPZCdpAdlfUnfzdbCs3D0bRO4JK7AHjBiDEZCZAY40AQqC1ZBQIOE9iwQxdsh}";
  }

  obtenerPromociones() {
    
    this.promocionService.getPromociones().subscribe(
      
      data => {
        
        this.arrayPromociones = data;
        console.log(this.arrayPromociones);
    },
    error =>{
      console.log(error)
    }
  )
  }

}
