import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../common/services/products.service';
import { IProduct } from '../../common/types/app';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  options = {
    bottom: 0,
    fixed: false,
    top: 184
  };
  products: IProduct[];
  filters = {
    price: 0,
    category: '',
    search: ''
  };

  constructor(
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
        this.products = products ? products : [];
    });
  }

  public setFilter({ type, value }): void {
    this.filters[type] = value;
  }
}
