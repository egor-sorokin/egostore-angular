import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {IProduct, IShipping} from '../types/app';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProduct[] = [];

  constructor(
    private http: HttpClient
  ) {

  }

  public addToCart(item): void {
    this.items.push(item);
  }

  public getItems(): IProduct[] {
    return this.items;
  }

  public clearCart(): IProduct[] {
    this.items = [];
    return this.items;
  }

  public getShippingPrices(): Observable<IShipping[]> {
    return this.http.get<IShipping[]>('/assets/shipping.json');
  }
}
