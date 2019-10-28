import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../common/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products;

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onAddToCart(item) {
    console.log('item', item);
  }
}
