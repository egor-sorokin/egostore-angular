import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { ProductsService} from '../../common/services/products.service';
import { IFilters, IProduct } from '../../common/types/app';
import { mediaQuery } from '../../common/constants';


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
  filters: IFilters = {
    search: '',
    category: '',
    price: 0
  };

  constructor(
    private productService: ProductsService,
    private breakpointObserver: BreakpointObserver
  ) {}

  get isMobile(): boolean {
    return this.breakpointObserver.isMatched(mediaQuery.mobile);
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: IProduct[]) => {
      this.products = products ? products : [];
    });
  }

  public setFilter({ type, value }): void {
    this.filters[type] = value;
  }
}
