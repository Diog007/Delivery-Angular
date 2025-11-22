import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Adicionais, PizzaBordas, PizzaSabor, PizzaTipo } from '../../Types';

@Component({
  selector: 'app-resumo-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resumo-pedido.component.html',
  styleUrls: ['./resumo-pedido.component.scss']
})
export class ResumoPedidoComponent implements OnChanges {
  @Input() pizzaSabor: PizzaSabor | null = null;
  @Input() pizzaAdicionais: Adicionais[] = [];
  @Input() pizzaBorda: PizzaBordas | null = null;
  @Input() pizzaTipo: PizzaTipo | null = null;
  @Output() pedidoAdicionado = new EventEmitter<any>();

  quantidade: number = 1;

  ngOnChanges(changes: SimpleChanges): void {
    // Log das mudanças para debug
    console.log('🔄 Resumo do Pedido - Mudanças detectadas:', {
      sabor: changes['pizzaSabor']?.currentValue,
      adicionais: changes['pizzaAdicionais']?.currentValue,
      borda: changes['pizzaBorda']?.currentValue,
      tipo: changes['pizzaTipo']?.currentValue
    });
  }

  get precoTotal(): number {
    let total = 0;

    // Adiciona o preço base do tipo da pizza
    if (this.pizzaTipo && this.pizzaTipo.precoBase) {
      total += this.pizzaTipo.precoBase;
    }

    if (this.pizzaSabor) {
      total += this.pizzaSabor.preco || 0;
    }

    if (this.pizzaAdicionais && this.pizzaAdicionais.length > 0) {
      total += this.pizzaAdicionais.reduce((sum, adicional) => sum + (adicional.preco || 0), 0);
    }

    if (this.pizzaBorda && this.pizzaBorda.preco) {
      total += this.pizzaBorda.preco;
    }

    return total * this.quantidade;
  }

  get precoUnitario(): number {
    let total = 0;

    // Adiciona o preço base do tipo da pizza
    if (this.pizzaTipo && this.pizzaTipo.precoBase) {
      total += this.pizzaTipo.precoBase;
    }

    if (this.pizzaSabor) {
      total += this.pizzaSabor.preco || 0;
    }

    if (this.pizzaAdicionais && this.pizzaAdicionais.length > 0) {
      total += this.pizzaAdicionais.reduce((sum, adicional) => sum + (adicional.preco || 0), 0);
    }

    if (this.pizzaBorda && this.pizzaBorda.preco) {
      total += this.pizzaBorda.preco;
    }

    return total;
  }

  get temItensObrigatorios(): boolean {
    return this.pizzaSabor !== null;
  }

  incrementarQuantidade(): void {
    if (this.quantidade < 10) {
      this.quantidade++;
    }
  }

  decrementarQuantidade(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho(): void {
    if (!this.temItensObrigatorios) {
      console.warn('⚠️ Não é possível adicionar: sabor não selecionado');
      return;
    }

    const pedido = {
      tipo: this.pizzaTipo,
      sabor: this.pizzaSabor,
      adicionais: this.pizzaAdicionais || [],
      borda: this.pizzaBorda,
      quantidade: this.quantidade,
      precoUnitario: this.precoUnitario,
      precoTotal: this.precoTotal,
      timestamp: new Date().toISOString()
    };

    console.log('🛒 Emitindo pedido para o carrinho:', pedido);
    this.pedidoAdicionado.emit(pedido);

    // Opcionalmente resetar quantidade após adicionar
    // this.quantidade = 1;
  }
}
