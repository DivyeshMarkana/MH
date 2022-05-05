import { CharacterDataContainer } from "./CharacterDataContainer"

export interface CharacterDataWrapper {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: CharacterDataContainer
}