import { HomeMarcas } from '../components/organisms'
import { Img, Meta, Titles } from './globals'

export interface Home {
  data: HomeData
  meta: Meta
}

export interface HomeData {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  banner_middle: HomeMiddle
  homeCard: HomeCard
  homeBanner: MainBanner
  HomeProducts: HomeProducts
  HomeProductsList: HomeProductsList
  HomeMarca:HomeMarcas
  //    seo: SEO
}
export interface HomeMarcas{
  title:string
  marcas: Marcas[]
}
export interface Marcas{
  img:Img
  url:string

}
export interface HomeProductsList {
  title: string
  content:string
  List_cardProducts: ListProducts[]
}
export interface ListProducts {
  title: string
  img: Img
  slug:string
  img_mobile: Img
}
export interface HomeMiddle {
  img: Img
  description: string
}
export interface HomeCard {
  title: string
  cards: Card[]
}
export interface Card {
  title: string
  content: string
  img: Img
  img_mobile: Img
  slug: string
}
export interface HomeProducts {
  title: string
  content: string
  range_products: string
}
export interface MainBanner {
  title: string
  subtitle: string
  img: Img
  content: string
  img_mobile: Img
}
export interface HomeService {
  title: string
  content: string
  img: Img
}
export interface HomeAbout {
  id: number
  title: string
  img: Img
  card: CardsAbout[]
}

export interface CardsAbout {
  // id:number
  section: string
  title: string
  content: string
}
