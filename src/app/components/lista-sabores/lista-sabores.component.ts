import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PizzaSabor } from '../../Types';

@Component({
  selector: 'app-lista-sabores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-sabores.component.html',
  styleUrls: ['./lista-sabores.component.scss']
})
export class ListaSaboresComponent {

  @Input({ required: true }) pizzaSabores!: PizzaSabor[];

}
