import { Component, EventEmitter, OnInit, Output} from '@angular/core';

import { IKeyToValue } from '../../common/types/generic';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  @Output() setFilter: EventEmitter<IKeyToValue<number | string>> = new EventEmitter();

  private prices: IKeyToValue<number | string>[] = [
    {
      label: '100',
      value: 100
    },
    {
      label: '200',
      value: 200
    },
    {
      label: '300',
      value: 300
    },
    {
      label: '400',
      value: 400
    }
  ];

  private categories: IKeyToValue<string>[] = [
    {
      label: 'Clothes',
      value: 'clothes'
    },
    {
      label: 'Food',
      value: 'food'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public setFilterByPrice(value: number): void {
    this.setFilter.emit({ type: 'price', value: value ? value : 0 });
  }

  public setFilterByCategory(value: number): void {
    this.setFilter.emit({ type: 'category', value: value ? value : '' });
  }

  public getPrices() {
    return this.prices;
  }

  public getCategories() {
    return this.categories;
  }
}
