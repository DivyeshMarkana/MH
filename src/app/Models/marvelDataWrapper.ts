import { marvelDataContainer } from "./marvelDataContainer"

export interface marvelDataWrapper<T> {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: marvelDataContainer<T>
}