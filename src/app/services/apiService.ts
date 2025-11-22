import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adicionais, PizzaSabor, PizzaTipo } from '../Types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly API_BASE_URL = 'http://localhost:8090/api';

  getPizzaTypes(): Observable<PizzaTipo[]> {
    return this.http.get<PizzaTipo[]>(`${this.API_BASE_URL}/menu/tipos`);
  }

  getPizzaSabores(id: string): Observable<PizzaSabor[]> {
    return this.http.get<PizzaSabor[]>(`${this.API_BASE_URL}/menu/sabores/${id}`);
  }

  getPizzaAdicionais(id: string): Observable<Adicionais[]> {
    return this.http.get<Adicionais[]>(`${this.API_BASE_URL}/menu/adicionais/${id}`)
  }
}
