import { Component, OnInit } from '@angular/core';
import { CartService } from '../../common/services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  public shippingPrices;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.shippingPrices = this.cartService.getShippingPrices();
  }

}
