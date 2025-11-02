import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterFixedComponent } from '../../../components/footer-fixed/footer-fixed.component';
import { ListaSaboresComponent } from '../../../components/lista-sabores/lista-sabores.component';
import { PizzaSabor } from '../../../Types';
import { ApiService } from '../../../services/apiService';
import { ActivatedRoute } from '@angular/router';
import { LoadingComponent } from '../../../components/loading/loading.component';

@Component({
  selector: 'app-customize',
  standalone: true,
  imports: [CommonModule, LoadingComponent, FormsModule, HeaderComponent, FooterFixedComponent, ListaSaboresComponent],
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  private readonly apiService = inject(ApiService);
  private readonly route = inject(ActivatedRoute);

  pizzaSabores: PizzaSabor[] = [];
  isLoading = false;
  pizzaTypeId: string | null = null;

  ngOnInit(): void {
    this.getRouteParams();
  }

  private getRouteParams(): void {
    this.route.queryParams.subscribe(params => {
      const typeId = params['typeId'];
      if (typeId && typeId.trim() !== '') {
        this.pizzaTypeId = typeId;
        this.getPizzaSabores(typeId);
      } else {
        console.error('ID do tipo de pizza inválido ou não encontrado na URL. Valor recebido:', typeId);
      }
    });
  }

  private getPizzaSabores(typeID: string): void {

    this.isLoading = true;
    this.apiService.getPizzaSabores(typeID).subscribe({
      next: (data) => {
        this.pizzaSabores = data;
      },
      error: (error) => {
        this.isLoading = false; // Importante: parar o loading em caso de erro
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

}
