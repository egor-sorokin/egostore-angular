import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../../common/services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  public shippingPrices;
  @Output() changeShipping: EventEmitter<any> = new EventEmitter();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.shippingPrices = this.cartService.getShippingPrices();
  }

  onChangeShipping(price) {
    this.changeShipping.emit(price);
  }
}
