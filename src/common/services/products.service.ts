import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../types/app';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) {

  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/assets/products.json');
  }
}
