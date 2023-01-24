import { Img, Meta, Titles } from './globals'

export interface About {
   data: AboutData
   meta: Meta
}

export interface AboutData {
   id: number
   title:string
   List_about:string
   img:Img

}
