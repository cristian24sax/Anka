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
   service: HomeService
   about :HomeAbout

   //    main_banner: MainBanner
//    home_characteristics: HomeCharacteristics
//    home_services: HomeAboutClass
//    home_work: HomeHowWork
//    home_review: HomeReview

//    home_location: HomeLocation
//    seo: SEO
}
export interface HomeService{
   title:string;
   content:string
   img: Img
}
export interface HomeAbout {
    id: number
    title: string
    img: Img
    card: CardsAbout[]
 }

export interface CardsAbout{
   // id:number
   section:string
   title:string
   content:string
}
 