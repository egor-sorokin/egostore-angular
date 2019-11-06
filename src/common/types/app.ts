export interface IProduct {
  id: number;
  src: string;
  alt?: string;
  category: string;
  price: number;
  title: string;
  description?: string;
}

export interface IShipping {
  type: string;
  price: number;
}

export interface IFilters {
  search: string;
  category: string;
  price: number;
}
