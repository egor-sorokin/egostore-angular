import { Component, Input, OnInit } from '@angular/core';

import { CartService } from '../../common/services/cart.service';
import { IProduct } from '../../common/types/app';
import { IKeyToValue } from '../../common/types/generic';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: IProduct[];
  @Input() filters: IKeyToValue<number | string>;

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
