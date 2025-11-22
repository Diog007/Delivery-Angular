import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterFixedComponent } from '../../../components/footer-fixed/footer-fixed.component';
import { ListaSaboresComponent } from '../../../components/lista-sabores/lista-sabores.component';
import { Adicionais, PizzaBordas, PizzaSabor, PizzaTipo } from '../../../Types';
import { ApiService } from '../../../services/apiService';
import { ActivatedRoute } from '@angular/router';
import { LoadingComponent } from '../../../components/loading/loading.component';
import { AdicionaisComponent } from '../../../components/adicionais/adicionais.component';
import { ListaBordasComponent } from "../../../components/lista-bordas/lista-bordas.component";
import { ResumoPedidoComponent } from '../../../components/resumo-pedido/resumo-pedido.component';

@Component({
  selector: 'app-customize',
  standalone: true,
  imports: [CommonModule,
    LoadingComponent,
    FormsModule, HeaderComponent,
    FooterFixedComponent, ListaSaboresComponent,
    AdicionaisComponent, ListaBordasComponent,
    ResumoPedidoComponent
  ],
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  private readonly apiService = inject(ApiService);
  private readonly route = inject(ActivatedRoute);

  pizzaTipo: PizzaTipo | null = null;

  pizzaSabores: PizzaSabor[] = [];
  pizzaAdicionais: Adicionais[] = [];
  pizzaBordas: PizzaBordas[] = [];

  // Estados de seleção
  saborSelecionado: PizzaSabor | null = null;
  adicionaisSelecionados: Adicionais[] = [];
  bordaSelecionada: PizzaBordas | null = null;

  isLoading = false;

  pizzaTypeId: string | null = null;

  //metodo executado na inicializacao do componente
  ngOnInit(): void {
    this.getRouteParams();
    this.getPizzaTipo(this.pizzaTypeId!);
    this.getAdicionais(this.pizzaTypeId!);
    this.getBordas(this.pizzaTypeId!);
  }

  //metodo para obter os parametros da rota(o id do tipo de pizza para buscar os sabores)
  private getRouteParams(): void {
    this.route.queryParams.subscribe(params => {
      const typeId = params['typeId'];
      if (typeId && typeId.trim() !== '') {
        this.pizzaTypeId = typeId;
        // Chama o método para obter os sabores de pizza passando o ID do tipo de pizza
        this.getPizzaSabores(typeId);
      } else {
        console.error('ID do tipo de pizza inválido ou não encontrado na URL. Valor recebido:', typeId);
      }
    });
  }

  //metodo para obter os sabores de pizza com base no id do tipo de pizza
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

  private getAdicionais(typeID: string): void {
    this.isLoading = true;
    this.apiService.getPizzaAdicionais(typeID).subscribe({
      next: (data) => {
        this.pizzaAdicionais = data;

      },
      error: (error) => {
        this.isLoading = false; // Importante: parar o loading em caso de erro
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  private getBordas(typeID: string): void {
    this.isLoading = true;
    this.apiService.getPizzaBordas(typeID).subscribe({
      next: (data) => {
        this.pizzaBordas = data;
        console.log('Adicionais recebidos:', data);
      },
      error: (error) => {
        this.isLoading = false; // Importante: parar o loading em caso de erro
      },
      complete: () => {
        this.isLoading = false;
      }
    });

  }

  //metodo para obter o tipo de pizza com base no id recebido
  private getPizzaTipo(typeId: string): void {
    this.apiService.getPizzaTypes().subscribe({
      next: (data) => {
        this.pizzaTipo = data.find(tipo => tipo.id === typeId) || null;
      },
      error: (error) => {
        console.error('Erro ao buscar tipo de pizza:', error);
      }
    });
  }


  // Métodos para receber seleções dos componentes filhos
  onSaborSelecionado(sabor: PizzaSabor): void {
    this.saborSelecionado = sabor;
    console.log('Sabor selecionado no pai:', sabor);
  }

  onAdicionaisSelecionados(adicionais: Adicionais[]): void {
    this.adicionaisSelecionados = adicionais;
    console.log('Adicionais selecionados no pai:', adicionais);
  }

  onBordaSelecionada(borda: PizzaBordas): void {
    this.bordaSelecionada = borda;
    console.log('Borda selecionada no pai:', borda);
  }

  onPedidoAdicionado(pedido: any): void {
    console.log('Pedido adicionado ao carrinho:', pedido);
    // Implementar lógica do carrinho aqui
  }

  private resetSelecoes(): void {
    this.saborSelecionado = null;
    this.adicionaisSelecionados = [];
    this.bordaSelecionada = null;
  }

}
