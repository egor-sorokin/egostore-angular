import { Component, OnInit } from '@angular/core';
import { CartService } from '../../common/services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IProduct, IShipping } from '../../common/types/app';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: IProduct[];
  shippingPrices: IShipping[];
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.cartService.getShippingPrices().subscribe((prices: IShipping[]) =>
      this.shippingPrices = prices ? prices : []
    );

    this.checkoutForm = this.builder.group({
      shipping: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  public getTotal(): number {
    return this.checkoutForm.value.shipping + this.items.reduce((a, b) => a + b.price, 0);
  }

  public cleanCart(): void {
    this.items = this.cartService.clearCart();
  }

  public proceed(): void {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    window.alert('Your order has been submitted');
  }
}
