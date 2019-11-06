import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {IKeyToValue} from '../../common/types/generic';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() setFilter: EventEmitter<IKeyToValue<number | string>> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSearch(value: string): void {
    this.setFilter.emit({ type: 'search', value: value ? value : '' });
  }
}
