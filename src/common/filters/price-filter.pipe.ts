import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from '../types/app';


@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(products: IProduct[], price: number): IProduct[] {
    return  price === 0 ? products : products.filter((product) => product.price <= price);
  }

}
