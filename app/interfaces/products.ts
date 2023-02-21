import { Img } from "./globals";

export interface Products {
  data: ProductsData[];
  meta: Meta;
}

export interface ProductsData {
  id:          number;
  title:       string;
  description: null | string;
  price:       number | null;
  isNew:       boolean;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  img:         Img;
  subcategory: Category;
  category:    Category;
}

export interface Category {
  id:           number;
  name:         string;
  slug:         string;
  description?: string;
  createdAt:    Date;
  updatedAt:    Date;
  publishedAt:  Date;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
