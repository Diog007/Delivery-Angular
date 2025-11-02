import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaTipo } from '../../Types';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.scss'
})
export class PizzaCardComponent {

  @Input({ required: true }) pizzaTipo!: PizzaTipo;

  @Output() selectPizza = new EventEmitter<PizzaTipo>();

  onSelectPizza(): void {
    this.selectPizza.emit(this.pizzaTipo);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  }

  getImageUrl(imagemUrl: string): string {
    if (imagemUrl.startsWith('http')) {
      return imagemUrl;
    }
    return `assets/images/${imagemUrl}`;
  }
}
