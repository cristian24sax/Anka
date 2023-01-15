import {Img,Meta} from './globals'
/* test */
export interface Generals {
   data: GeneralsData
   meta: Meta
}

export interface GeneralsData {
   id:             number;
   phone:          string;
   email:          string;
   address:        string;
   url_map:        string;
   phone2:         string;
   telf:           string;
   pixel_facebook:           string;
   facebook_id:           string;
   tag_manager:           string;
   schedule:       string;
   google_analytics: string;
   createdAt:      string;
   updatedAt:      string;
   publishedAt:    string;
   logo:           Logo;
   socials_networks: SocialsNetwork[];
 
}
export interface Logo {
   id:                number;
   name:              string;
   width:             number;
   height:            number;
   size:              number;
   url:               string;

}
export interface SocialsNetwork {
   id: number
   type: string
   url: string
}

export interface Polylang {
   data: PolylangData
   meta: Meta
}

export interface PolylangData {
   id:              number;
   lbl_contact_us:  string;
   lbl_see_more:    string;
   lbl_see_service: string;
   createdAt:       string;
   updatedAt:       string;
   publishedAt:     string;
   menu:            Menu[];
}


export interface Menu {
   id?: number
   label: string
   url: string
}

export interface ImageAlt {
   id: number
   name: string
   alternativeText: string
   caption: string
   width: number
   height: number
   formats: WelcomeFormats | null
   hash: string
   ext: string
   mime: string
   size: number
   url: string
   previewUrl: string
   provider: string
   provider_metadata: string
   createdAt: string
   updatedAt: string
}

export interface WelcomeFormats {
   large: WelcomeLarge
   small: WelcomeLarge
   medium: WelcomeLarge
   thumbnail: WelcomeLarge
}

export interface WelcomeLarge {
   ext: string
   url: string
   hash: string
   mime: string
   name: string
   path: string
   size: number
   width: number
   height: number
}
