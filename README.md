# Sistema de Delivery de Pizzas

**Status: Em Desenvolvimento Ativo**

Um sistema completo de delivery de pizzas desenvolvido como SaaS (Software as a Service) com funcionalidades avançadas de gerenciamento de pedidos, cardápio e entrega.

## Visão Geral

Este projeto é uma solução completa para pizzarias que desejam oferecer serviços de delivery online. O sistema oferece uma interface moderna para clientes fazerem pedidos, além de um painel administrativo robusto para gerenciamento completo do negócio.

## Tecnologias Utilizadas

### Frontend
- **Angular 19** - Framework principal para desenvolvimento da interface
- **TypeScript** - Linguagem de programação
- **Tailwind CSS** - Framework CSS para estilização
- **RxJS** - Programação reativa
- **Angular Signals** - Gerenciamento de estado moderno

### Backend
- **Java 21** - Linguagem de programação backend
- **MongoDB** - Banco de dados NoSQL
- **Spring Boot** - Framework para desenvolvimento de APIs REST

### Ferramentas de Desenvolvimento
- **Angular CLI** - Ferramenta de desenvolvimento
- **Node.js** - Ambiente de execução
- **npm** - Gerenciador de pacotes

## Status do Desenvolvimento

### ✅ Implementado
- Interface de listagem de pizzas
- Sistema de navegação com roteamento
- Componentes de carregamento animados
- Header e footer fixo responsivos
- Estrutura de componentes reutilizáveis
- Configuração de estilos com Tailwind CSS
- Sistema de tipos TypeScript
- Estrutura de serviços

### 🚧 Em Desenvolvimento
- Sistema de personalização de pizzas
- Carrinho de compras
- Sistema de autenticação
- Integração com backend Java
- Painel administrativo

### 📋 Planejado
- Gateway de pagamento
- Rastreamento de pedidos em tempo real
- Sistema de notificações
- Relatórios e analytics
- App mobile (PWA)

## Funcionalidades Planejadas

### Para Clientes
- Navegação de cardápio com diferentes tamanhos de pizza
- Personalização de pizzas com sabores, massas e extras
- Sistema de carrinho de compras
- Rastreamento de pedidos em tempo real
- Interface responsiva para dispositivos móveis
- Sistema de autenticação seguro

### Para Administradores
- Gerenciamento completo do cardápio
- Controle de pedidos e status de entrega
- Relatórios de vendas e analytics
- Gestão de usuários e permissões
- Configuração de preços e promoções

## Estrutura do Projeto

```
delivery-angular/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizáveis
│   │   │   ├── header/          # Cabeçalho da aplicação
│   │   │   ├── footer-fixed/    # Rodapé fixo com navegação
│   │   │   ├── pizza-card/      # Card de exibição de pizzas
│   │   │   ├── loading/         # Componente de carregamento
│   │   │   ├── skeleton/        # Componente skeleton loading
│   │   │   └── lista-sabores/   # Lista de sabores (em dev)
│   │   ├── pages/               # Páginas da aplicação
│   │   │   ├── cliente/         # Páginas do cliente
│   │   │   │   ├── home/        # Página inicial
│   │   │   │   └── customize/   # Personalização (em dev)
│   │   │   └── admin/           # Páginas administrativas (planejado)
│   │   ├── services/            # Serviços e lógica de negócio
│   │   │   ├── apiService.ts    # Comunicação com API
│   │   │   └── cartService.ts   # Serviço do carrinho
│   │   ├── guards/              # Guards de rota
│   │   ├── interceptors/        # Interceptadores HTTP
│   │   └── Types.ts             # Definições de tipos TypeScript
│   └── styles.scss              # Estilos globais
├── tailwind.config.ts           # Configuração do Tailwind
├── angular.json                 # Configuração do Angular
└── package.json                 # Dependências do projeto
```

## Instalação e Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- Angular CLI versão 19.0.2
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd delivery-angular
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
ng serve
```

4. Acesse a aplicação em `http://localhost:4200`

## Scripts Disponíveis

### Servidor de Desenvolvimento
```bash
ng serve
```
Inicia um servidor de desenvolvimento local. A aplicação será recarregada automaticamente quando você modificar os arquivos fonte.

### Geração de Código
```bash
ng generate component component-name
```
O Angular CLI inclui ferramentas poderosas de scaffolding. Para uma lista completa de esquemas disponíveis, execute:
```bash
ng generate --help
```

### Build de Produção
```bash
ng build
```
Compila o projeto e armazena os artefatos de build no diretório `dist/`. Por padrão, o build de produção otimiza a aplicação para performance e velocidade.

### Testes
```bash
ng test
```
Executa testes unitários com o test runner [Karma](https://karma-runner.github.io).

```bash
ng e2e
```
Para testes end-to-end (framework não incluído por padrão).

## Arquitetura

### Frontend (Angular)
- **Componentes Standalone** - Utilização dos novos componentes standalone do Angular 19
- **Signals** - Gerenciamento de estado reativo moderno
- **Services** - Injeção de dependência para lógica de negócio
- **Guards** - Proteção de rotas (planejado)
- **Interceptors** - Manipulação de requisições HTTP

### Backend (Java + MongoDB) - Em Desenvolvimento
- **API REST** - Endpoints para comunicação com frontend
- **Autenticação JWT** - Sistema de autenticação seguro
- **Validação** - Validação de dados de entrada
- **Persistência** - Mapeamento objeto-documento com MongoDB

## Padrões de Desenvolvimento

- **Clean Code** - Código limpo e bem documentado
- **SOLID Principles** - Princípios de design orientado a objetos
- **Responsive Design** - Interface adaptável para todos os dispositivos
- **Component-First** - Desenvolvimento baseado em componentes
- **Type Safety** - Uso extensivo de TypeScript para type safety

## Roadmap de Desenvolvimento

### Fase 1 - Frontend Base (Atual)
- [x] Estrutura inicial do projeto
- [x] Componentes base (Header, Footer, Loading)
- [x] Roteamento básico
- [x] Design system com Tailwind
- [ ] Sistema de personalização de pizzas
- [ ] Carrinho de compras funcional

### Fase 2 - Backend Integration
- [ ] API REST em Java 21
- [ ] Autenticação e autorização
- [ ] Integração MongoDB
- [ ] Sistema de pedidos

### Fase 3 - Funcionalidades Avançadas
- [ ] Painel administrativo
- [ ] Sistema de pagamentos
- [ ] Notificações em tempo real
- [ ] PWA e funcionalidades offline

## Contribuição

Este projeto está em desenvolvimento ativo. Contribuições são bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Recursos Adicionais

Para mais informações sobre o Angular CLI, incluindo referências detalhadas de comandos, visite a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Contato

Para suporte e dúvidas sobre o desenvolvimento, entre em contato através dos canais oficiais ou abra uma issue no repositório.

---

**Nota**: Este projeto está em desenvolvimento ativo. Muitas funcionalidades ainda estão sendo implementadas. Acompanhe o repositório para updates regulares.
