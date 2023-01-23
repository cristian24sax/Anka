export interface Categories {
   data: CategoriesData[];
   meta: Meta;
}

export interface CategoriesData {
   id:            number;
   name:          string;
   description:   string;
   createdAt:     Date;
   updatedAt:     Date;
   publishedAt:   Date;
   products:      Product[];
   subcategories: Subcategory[];
}

export interface Product {
   id:          number;
   title:       string;
   description: string;
   price:       number;
   isNew:       boolean;
   createdAt:   Date;
   updatedAt:   Date;
   publishedAt: Date;
}

export interface Subcategory {
   id:          number;
   name:        string;
   createdAt:   Date;
   updatedAt:   Date;
   publishedAt: Date;
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
