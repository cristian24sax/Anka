import { Meta, Titles } from './globals'

export interface Service {
  data: ServiceData[]
  meta: Meta
}

export interface ServiceData {
  id: number
  title: string
  subtitle: string
  service: ListService[]
}

export interface ListService {
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  img: Img
  img_mobile: Img
}
export interface Img {
  id: number
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: Date
  updatedAt: Date
}

export interface Formats {
  thumbnail: Thumbnail
}

export interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
