import { Component, Input } from '@angular/core';
import { Cuota } from '../../models/cuota';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() cuotas?: Array<Cuota>;
  constructor(){

  }
}
