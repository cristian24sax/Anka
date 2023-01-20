import { Img, Meta, Titles } from './globals'

export interface Service {
   data: ServiceData
   meta: Meta
}

export interface ServiceData {
   id: number
   title:string
   List_services:string
   img:Img

}
