import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../common/services/cart.service';

import { ProductsService } from '../../common/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(products => {
        this.route.paramMap.subscribe((params) => {
          this.product = products[+params.get('productId')];
        });
      });
  }

  addToCart(item) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(item);
  }
}
