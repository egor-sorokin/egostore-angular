import { Component, OnInit } from '@angular/core';

import { IKeyToValue } from '../../common/types/generic';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  public prices: IKeyToValue<number | string>[] = [
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

  public categories: IKeyToValue<string>[] = [
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

  public ngOnInit(): void {
  }


  public filterByPrice(value: number): void {
    console.log('filterByPrice:::', value);
  }


  public filterByCategory(value: string): void {
    console.log('filterByCategory:::', value);
  }

}
