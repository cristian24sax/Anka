import { Img, Meta, Titles } from './globals'

export interface About {
   data: AboutData;
   meta: Meta;
}

export interface AboutData {
   id:          number;
   createdAt:   Date;
   updatedAt:   Date;
   publishedAt: Date;
   title:       string;
   subtitle:    string;
   content:     string;
   mision:      string;
   vision:      string;
   img : Img
}

