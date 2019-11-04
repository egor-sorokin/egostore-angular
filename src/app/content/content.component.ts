import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../common/services/products.service';
import {IProduct} from '../../common/types/app';


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
  allProducts: IProduct[];

  constructor(
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      if (products) {
        this.allProducts = products;
        this.products = products;
      }
    });
  }

  search(value: string): void {
    this.products = this.allProducts.filter(({ title }: IProduct ) => title.toLowerCase().includes(value.trim().toLowerCase()));
  }
}
