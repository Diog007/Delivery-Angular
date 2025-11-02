import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PizzaType } from '../Types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly API_BASE_URL = 'http://localhost:8090/api';

  getPizzaTypes(): Observable<PizzaType[]> {
    return this.http.get<PizzaType[]>(`${this.API_BASE_URL}/menu/tipos`);
  }


}
