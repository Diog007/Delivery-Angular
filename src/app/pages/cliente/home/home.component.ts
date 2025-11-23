import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaCardComponent } from '../../../components/pizza-card/pizza-card.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/apiService';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterFixedComponent } from '../../../components/footer-fixed/footer-fixed.component';
import { LoadingComponent } from '../../../components/loading/loading.component';
import { PizzaTipo } from '../../../Types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PizzaCardComponent,
    CommonModule,
    LoadingComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly apiService = inject(ApiService);

  pizzaTypes: PizzaTipo[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.fetchPizzaTypes();
  }

  private fetchPizzaTypes(): void {
    this.isLoading = true;
    this.apiService.getPizzaTypes().subscribe({
      next: (data) => {
        this.pizzaTypes = data;
      },
      error: (error) => {
        console.error('Erro ao buscar tipos de pizza:', error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  onSelectPizza(pizzaType: PizzaTipo): void {
    this.router.navigate(['/customize'], {
      queryParams: { typeId: pizzaType.id }
    });
  }

  trackByIndex(index: number): number {
    return index;
  }

  trackByPizzaId(index: number, pizzaType: PizzaTipo): string {
    return pizzaType.id;
  }
}
