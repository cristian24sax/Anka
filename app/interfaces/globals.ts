export interface Meta {}

export interface Titles {
   id: number
   title: string
   subtitle: string
}
export interface Img {
   id: number
   name: string
   alternativeText: string
   caption: string
   width: number
   height: number
   formats: Formats | string
   hash: string
   ext: EXT | null
   mime: MIME | null
   size: number
   url: string
   previewUrl: string
   provider: Provider | null
   provider_metadata: string
   createdAt: string
   updatedAt: string
}
export interface Formats {
   small?: Large
   thumbnail: Large
   medium?: Large
   large?: Large
}
export enum EXT {
   Jpg = '.jpg',
   PNG = '.png',
}

export interface Large {
   ext: EXT
   url: string
   hash: string
   mime: MIME
   name: string
   path: string
   size: number
   width: number
   height: number
}
export enum MIME {
   ImageJPEG = 'image/jpeg',
   ImagePNG = 'image/png',
}
export enum Provider {
   AwsS3 = 'aws-s3',
}
