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
  @Output() aoSelecionar = new EventEmitter<PizzaBordas>();

  selecionada: PizzaBordas | null = null;

  ngOnInit(): void {
    // Define a primeira opção como padrão se houver lista
    if (this.pizzaBordas.length > 0) {
      this.selecionada = this.pizzaBordas[0];
      // Emite a seleção padrão para o componente pai
      this.aoSelecionar.emit(this.selecionada);
    }
  }

  selecionarOpcao(opcao: PizzaBordas): void {
    this.selecionada = opcao;
    this.aoSelecionar.emit(opcao);
    console.log('Borda selecionada:', opcao);
  }

  isSelecionada(opcao: PizzaBordas): boolean {
    return this.selecionada?.id === opcao.id;
  }
}
