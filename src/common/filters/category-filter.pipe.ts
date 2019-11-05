import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from '../types/app';


@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(products: IProduct[], category: string): IProduct[] {
    return category === '' ? products : products.filter((product) => product.category === category);
  }

}
