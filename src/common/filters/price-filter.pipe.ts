import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from '../types/app';


@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(products: IProduct[], price: number): IProduct[] {
    console.log('pipe', products);
    console.log('pipe', price);
    return  price === 0 ? products : products.filter((product) => product.price <= price);
  }

}
