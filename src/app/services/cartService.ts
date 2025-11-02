import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PizzaType, Beverage, CreateOrderDto, OrderItemDto } from '../Types';

export interface CartItem {
  id: string;
  name: string;
  type: 'PIZZA' | 'BEVERAGE';
  data: {
    pizzaType?: PizzaType;
    beverage?: Beverage;
    selectedFlavors?: string[];
    selectedCrust?: string;
    selectedExtras?: string[];
  };
  observations: string;
  quantity: number;
  totalPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    // Carrega o carrinho do localStorage se existir
    this.loadCartFromStorage();
  }

  /**
   * Adiciona item ao carrinho
   */
  addToCart(item: CartItem): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = [...currentItems, item];
    this.updateCart(updatedItems);
  }

  /**
   * Remove item do carrinho
   */
  removeFromCart(itemId: string): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter(item => item.id !== itemId);
    this.updateCart(updatedItems);
  }

  /**
   * Atualiza quantidade de um item
   */
  updateQuantity(itemId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(itemId);
      return;
    }

    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.map(item => 
      item.id === itemId ? { ...item, quantity } : item
    );
    this.updateCart(updatedItems);
  }

  /**
   * Limpa o carrinho
   */
  clearCart(): void {
    this.updateCart([]);
  }

  /**
   * Retorna o total de itens no carrinho
   */
  getTotalItems(): number {
    return this.cartItemsSubject.value.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Retorna o total em valor do carrinho
   */
  getTotalPrice(): number {
    return this.cartItemsSubject.value.reduce((total, item) => total + (item.totalPrice * item.quantity), 0);
  }

  /**
   * Retorna os itens atuais do carrinho
   */
  getCurrentItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  /**
   * Converte o carrinho para o formato necessário para criar um pedido
   */
  convertToOrderItems(): OrderItemDto[] {
    return this.cartItemsSubject.value.map(item => ({
      itemType: item.type,
      pizzaTypeId: item.data.pizzaType?.id,
      flavorIds: item.data.selectedFlavors,
      crustId: item.data.selectedCrust,
      extraIds: item.data.selectedExtras,
      beverageId: item.data.beverage?.id,
      observations: item.observations,
      quantity: item.quantity
    }));
  }

  /**
   * Gera um ID único para o item do carrinho
   */
  generateCartItemId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  private updateCart(items: CartItem[]): void {
    this.cartItemsSubject.next(items);
    this.saveCartToStorage(items);
  }

  private loadCartFromStorage(): void {
    try {
      const savedCart = localStorage.getItem('pizzaCart');
      if (savedCart) {
        const items = JSON.parse(savedCart);
        this.cartItemsSubject.next(items);
      }
    } catch (error) {
      console.error('Erro ao carregar carrinho do localStorage:', error);
    }
  }

  private saveCartToStorage(items: CartItem[]): void {
    try {
      localStorage.setItem('pizzaCart', JSON.stringify(items));
    } catch (error) {
      console.error('Erro ao salvar carrinho no localStorage:', error);
    }
  }
}