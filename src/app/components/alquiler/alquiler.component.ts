import { Component } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-alquiler',
  standalone: true,
  imports: [DataTablesModule],
  templateUrl: './alquiler.component.html',
  styleUrl: './alquiler.component.css'
})
export class AlquilerComponent {
  dtOptions: any = {};

  ngOnInit(){
    this.dtOptions = {
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      responsive: true
    }
  }
}
