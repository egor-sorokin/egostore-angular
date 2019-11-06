import { Component, Input, OnInit } from '@angular/core';

import { CartService } from '../../common/services/cart.service';
import { IFilters, IProduct } from '../../common/types/app';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: IProduct[];
  @Input() filters: IFilters;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  public addToCart(product: IProduct): void {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
