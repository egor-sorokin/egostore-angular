import { Component, OnInit } from '@angular/core';
import { CartService } from '../../common/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  shippingPrice = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  getTotal() {
    return this.shippingPrice + this.items.reduce((a, b) => a + b.price, 0);
  }

  cleanCart() {
    this.items = this.cartService.clearCart();
  }

  changeShipping(price) {
    this.shippingPrice = price;
  }
}
