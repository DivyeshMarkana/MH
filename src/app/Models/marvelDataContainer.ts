import { Character } from "./characterModels/Character";


export interface marvelDataContainer<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<T>;
}
