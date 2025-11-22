import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Adicionais } from '../../Types';

@Component({
  selector: 'app-adicionais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adicionais.component.html',
  styleUrl: './adicionais.component.scss'
})
export class AdicionaisComponent {

  @Input({ required: true }) pizzaAdicionais!: Adicionais[];
  @Output() selectionChange = new EventEmitter<Adicionais[]>();

  selectedItems = new Set<string>();

  toggleSelection(item: Adicionais) {
    if (this.selectedItems.has(item.id)) {
      this.selectedItems.delete(item.id);
    } else {
      this.selectedItems.add(item.id);
    }

    // Emite a lista completa de objetos selecionados
    const selectedObjects = this.pizzaAdicionais.filter(i => this.selectedItems.has(i.id));
    this.selectionChange.emit(selectedObjects);
  }

  isSelected(item: Adicionais): boolean {
    return this.selectedItems.has(item.id);
  }

  getSelectedItems(): Adicionais[] {
    return this.pizzaAdicionais.filter(item => this.selectedItems.has(item.id));
  }

  getTotalPrice(): number {
    return this.getSelectedItems().reduce((total, item) => total + item.preco, 0);
  }
}
