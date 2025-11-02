export type OrderStatus =
  | "RECEIVED"
  | "PREPARING"
  | "OUT_FOR_DELIVERY"
  | "COMPLETED"
  | "CANCELLED";

export type DeliveryType = "DELIVERY" | "PICKUP";
export type PaymentMethod = "CASH" | "CARD";
export type DrinkCategory = 'refrigerante' | 'cerveja' | 'suco' | 'agua';

export interface PizzaCrust {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface PizzaType {
  id: string;
  nome: string;
  descricao: string;
  precoBase: number;
  imagemUrl?: string;
}

export interface PizzaFlavor {
  id: string;
  name: string;
  description: string;
  pizzaTypes: PizzaType[];
  price: number;
  imageUrl?: string;
}

export interface PizzaExtra {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface BeverageCategory {
  id: string;
  name: string;
}

export interface Beverage {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  alcoholic: boolean;
  category: BeverageCategory;
}

export interface AppliedExtra {
  extra: PizzaExtra;
  onFlavor: PizzaFlavor | null;
}

export interface CustomerUserDto {
  id: string;
  name: string;
  email: string;
}

export interface DeliveryAddress {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  zipCode: string;
}

export interface Payment {
  method: PaymentMethod;
  cardBrand?: string;
  cardType?: string;
}

export interface OrderItemFromApi {
  id: string;
  itemType: "PIZZA" | "BEVERAGE";
  pizzaType: PizzaType | null;
  flavors: PizzaFlavor[] | null;
  appliedExtras: AppliedExtra[] | null;
  crust: PizzaCrust | null;
  beverage: Beverage | null;
  observations: string;
  quantity: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  items: OrderItemFromApi[];
  customerUser: CustomerUserDto;
  deliveryType: DeliveryType;
  deliveryAddress?: DeliveryAddress;
  payment: Payment;
  status: OrderStatus;
  createdAt: string;
  estimatedDeliveryTime?: string;
  totalAmount: number;
  observations?: string;
}

// DTOs para Autenticação
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  whatsapp?: string;
  cpf?: string;
}

export interface LoginResponse {
  token: string;
  name: string;
  email: string;
}

// DTOs para Pedidos
export interface CreateOrderDto {
  items: OrderItemDto[];
  deliveryType: DeliveryType;
  deliveryAddress?: DeliveryAddress;
  payment: Payment;
  observations?: string;
}

export interface OrderItemDto {
  itemType: "PIZZA" | "BEVERAGE";
  pizzaTypeId?: string;
  flavorIds?: string[];
  crustId?: string;
  extraIds?: string[];
  beverageId?: string;
  observations: string;
  quantity: number;
}
