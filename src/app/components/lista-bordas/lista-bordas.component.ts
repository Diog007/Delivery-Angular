import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PizzaBordas } from '../../Types';

@Component({
  selector: 'app-lista-bordas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-bordas.component.html',
  styleUrls: ['./lista-bordas.component.scss']
})
export class ListaBordasComponent {

  @Input({ required: true }) pizzaBordas!: PizzaBordas[];

  // Evento para avisar o pai qual borda foi escolhida
  @Output() aoSelecionar = new EventEmitter<PizzaBordas>();

  // Opção selecionada atualmente
  selecionada: PizzaBordas | null = null;

  ngOnInit(): void {
    // Define a primeira opção como padrão se houver lista
    if (this.pizzaBordas.length > 0) {
      this.selecionada = this.pizzaBordas[0];
    }
  }

  selecionarOpcao(opcao: PizzaBordas): void {
    this.selecionada = opcao;
    this.aoSelecionar.emit(opcao);
  }
}
