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
  // service: HomeService
  // about :HomeAbout
  //    main_banner: MainBanner
  //    home_characteristics: HomeCharacteristics
  //    home_services: HomeAboutClass
  //    home_work: HomeHowWork
  //    home_review: HomeReview

  //    home_location: HomeLocation
  //    seo: SEO
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
