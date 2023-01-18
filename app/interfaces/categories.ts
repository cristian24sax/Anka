import { Img, Meta, Titles } from './globals'

export interface Categories {
   data: CategoriesData[]
   meta: Meta
}

export interface CategoriesData {
   id: number
   name: string 
}
 