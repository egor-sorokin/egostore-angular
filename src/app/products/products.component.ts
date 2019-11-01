import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../common/services/products.service';
import { CartService } from '../../common/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products;

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onAddToCart(product) {
    this.cartService.addToCart(product);
  }
}
