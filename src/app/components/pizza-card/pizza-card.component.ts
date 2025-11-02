import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PizzaType } from '../../Types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.scss'
})
export class PizzaCardComponent {

  @Input({ required: true }) pizzaType!: PizzaType;

  @Output() selectPizza = new EventEmitter<PizzaType>();

  onSelectPizza(): void {
    this.selectPizza.emit(this.pizzaType);
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
