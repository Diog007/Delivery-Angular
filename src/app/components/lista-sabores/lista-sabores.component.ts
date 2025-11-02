// import { CommonModule } from '@angular/common';
// import { Component, computed, input, output, signal } from '@angular/core';
// import { PizzaFlavor } from '../../Types';
// import { catchError, map, of, startWith } from 'rxjs';

// @Component({
//   selector: 'app-lista-sabores',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './lista-sabores.component.html',
//   styleUrls: ['./lista-sabores.component.scss']
// })
// export class ListaSaboresComponent {

// // --- Entradas e Saídas ---

//   /**
//    * (Entrada) O ID do tipo de pizza, vindo do componente pai.
//    * Usamos a nova função `input()` (Angular 17.1+)
//    */
//   typeId = input.required<string>();

//   /**
//    * (Saída) Emite a lista de sabores selecionados sempre que houver mudança.
//    */
//   selectionChange = output<Flavor[]>();

//   // --- Injeção de Dependência ---
//   private flavorService = inject(FlavorService);

//   // --- Gerenciamento de Estado com Signals ---

//   // Estado da API: Transforma o 'typeId' reativo em uma chamada de API
//   private flavorRequestState = toSignal(
//     computed(() => {
//       const id = this.typeId(); // Lê o valor do signal de entrada
//       return this.flavorService.getFlavorsByTypeId(id).pipe(
//         map(data => ({ loading: false, data, error: null } as DataState<PizzaFlavor[]>)),
//         startWith({ loading: true, data: null, error: null } as DataState<PizzaFlavor[]>),
//         catchError(err => {
//           console.error('Erro ao buscar sabores:', err);
//           return of({ loading: false, data: null, error: 'Não foi possível carregar os sabores.' });
//         })
//       );
//     })
//   );

//   // Signals públicas para o template
//   flavors = computed(() => this.flavorRequestState()?.data ?? []);
//   isLoading = computed(() => this.flavorRequestState()?.loading ?? false);
//   error = computed(() => this.flavorRequestState()?.error ?? null);

//   // Estado local
//   allowTwoFlavors = signal(false);
//   selectedFlavors = signal<PizzaFlavor[]>([]);

//   // --- Métodos de Lógica ---

//   /**
//    * Lida com o clique em um item de sabor.
//    */
//   selectFlavor(flavor: PizzaFlavor): void {
//     const currentSelection = this.selectedFlavors();
//     const isSelected = this.isSelected(flavor);

//     if (this.allowTwoFlavors()) {
//       // Lógica para DOIS sabores
//       if (isSelected) {
//         // Remove se já estava selecionado
//         this.selectedFlavors.set(currentSelection.filter(f => f.id !== flavor.id));
//       } else if (currentSelection.length < 2) {
//         // Adiciona se houver espaço
//         this.selectedFlavors.set([...currentSelection, flavor]);
//       }
//     } else {
//       // Lógica para UM sabor
//       if (isSelected) {
//         // Desmarca
//         this.selectedFlavors.set([]);
//       } else {
//         // Seleciona o novo
//         this.selectedFlavors.set([flavor]);
//       }
//     }

//     // Emite a nova seleção para o componente pai
//     this.selectionChange.emit(this.selectedFlavors());
//   }

//   /**
//    * Chamado quando o "toggle" de "Dois Sabores" é alterado.
//    */
//   onToggleChange(checked: boolean): void {
//     this.allowTwoFlavors.set(checked);

//     // Se o usuário desativar "Dois Sabores" e tiver 2 selecionados,
//     // mantemos apenas o primeiro.
//     if (!checked && this.selectedFlavors().length > 1) {
//       this.selectedFlavors.set([this.selectedFlavors()[0]]);
//       this.selectionChange.emit(this.selectedFlavors());
//     }
//   }

//   /**
//    * Verifica se um sabor está na lista de selecionados.
//    */
//   isSelected(flavor: PizzaFlavor): boolean {
//     return this.selectedFlavors().some(f => f.id === flavor.id);
//   }

//   /**
//    * Constrói o caminho para o ícone local.
//    * Assumindo que os ícones estão em 'assets/icons/'.
//    */
//   getIconPath(iconKey: string): string {
//     // Ex: 'assets/icons/brigadeiro.png'
//     // A imagem que você enviou parece usar os nomes "Prestígio", "Kids Confete", etc.
//     // O 'iconKey' da API deve corresponder a esses nomes de arquivo.
//     return `assets/icons/${iconKey.toLowerCase().replace(' ', '-')}.png`;
//   }
// }
