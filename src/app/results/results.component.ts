import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  private results = [
    {
      id: 0,
      src: 'http://nvmyeyes.com/wp-content/uploads/2019/01/healthy-food.jpg',
      alt: '',
      category: 'food',
      price: 120,
      title: 'product 0',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
    {
      id: 1,
      src: 'https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_1280.jpg',
      alt: '',
      category: 'clothes',
      price: 250,
      title: 'product 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
    {
      id: 2,
      src: 'https://cdn.pixabay.com/photo/2016/10/25/13/43/christmas-stollen-1768907_1280.jpg',
      alt: '',
      category: 'food',
      price: 20,
      title: 'product 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 3,
      src: 'https://cdn.pixabay.com/photo/2017/12/01/16/14/cinnamon-stars-2991174_1280.jpg',
      alt: '',
      category: 'food',
      price: 411,
      title: 'product 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
    {
      id: 4,
      src: 'https://cdn.pixabay.com/photo/2015/02/19/12/59/tie-642063_1280.jpg',
      alt: '',
      category: 'clothes',
      price: 99,
      title: 'product 4',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
    {
      id: 5,
      src: 'https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_1280.jpg',
      alt: '',
      category: 'clothes',
      price: 205,
      title: 'product 5',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
    {
      id: 6,
      src: 'https://cdn.pixabay.com/photo/2016/04/13/07/18/blueberry-1326154_1280.jpg',
      alt: '',
      category: 'food',
      price: 8,
      title: 'product 6',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 7,
      src: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg',
      alt: '',
      category: 'food',
      price: 53,
      title: 'product 7',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
    {
      id: 8,
      src: 'https://cdn.pixabay.com/photo/2017/08/06/08/01/people-2590092_1280.jpg',
      alt: '',
      category: 'clothes',
      price: 372,
      title: 'product 8',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
    {
      id: 9,
      src: 'https://cdn.pixabay.com/photo/2014/07/31/22/59/man-407095_1280.jpg',
      alt: '',
      category: 'clothes',
      price: 89,
      title: 'product 9',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
    {
      id: 10,
      src: 'https://cdn.pixabay.com/photo/2018/05/26/10/54/strawberries-3431122_1280.jpg',
      alt: '',
      category: 'food',
      price: 13,
      title: 'product 10',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddToCart(item) {
    console.log('item', item);
  }

  public getResults() {
    return this.results;
  }
}
