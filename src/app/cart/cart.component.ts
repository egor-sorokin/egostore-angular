import { Component, OnInit } from '@angular/core';
import { CartService } from '../../common/services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  shippingPrices;
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.shippingPrices = this.cartService.getShippingPrices();

    this.checkoutForm = this.builder.group({
      shipping: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  getTotal() {
    return this.checkoutForm.value.shipping + this.items.reduce((a, b) => a + b.price, 0);
  }

  cleanCart() {
    this.items = this.cartService.clearCart();
  }

  proceed() {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    window.alert('Your order has been submitted');
  }
}
