import { ComicSummary } from "./ComicSummary";


export interface ComicList {
  available: number;
  collectionURI: string;
  items: ComicSummary[];
  returned: number;
}
