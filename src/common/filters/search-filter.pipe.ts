import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from '../types/app';


@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(products: IProduct[], searchValue: string): IProduct[] {
    return searchValue === '' ? products : products.filter(({ title }: IProduct ) =>
      title.toLowerCase().includes(searchValue.trim().toLowerCase()));
  }

}
