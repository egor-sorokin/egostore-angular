import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../../common/services/cart.service';
import { ProductsService } from '../../common/services/products.service';
import { IProduct } from '../../common/types/app';

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

  public addToCart(item: IProduct): void {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(item);
  }
}
