import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { CartService } from '../../common/services/cart.service';
import { IFilters, IProduct } from '../../common/types/app';
import { mediaQuery} from '../../common/constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: IProduct[];
  @Input() filters: IFilters;

  constructor(
    private cartService: CartService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
  }

  public addToCart(product: IProduct): void {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  public isTablet(): boolean {
    return this.breakpointObserver.isMatched(mediaQuery.tablet);
  }

  public isSmallDesktop(): boolean {
    return this.breakpointObserver.isMatched(mediaQuery.smallDesktop);

  }

  get getGridBreakpoint() {
    if (this.isTablet()) {
      return 1;
    } else if (this.isSmallDesktop()) {
      return 2;
    } else {
      return 3;
    }
  }
}
