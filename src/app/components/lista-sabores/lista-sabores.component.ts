import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() saborSelecionado = new EventEmitter<PizzaSabor>();

  saborAtualSelecionado: PizzaSabor | null = null;

  selecionarSabor(sabor: PizzaSabor): void {
    this.saborAtualSelecionado = sabor;
    this.saborSelecionado.emit(sabor);
  }

  isSelecionado(sabor: PizzaSabor): boolean {
    return this.saborAtualSelecionado?.id === sabor.id;
  }

}
