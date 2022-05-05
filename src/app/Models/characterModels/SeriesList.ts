import { SeriesSummary } from "./SeriesSummary";


export interface SeriesList {
  available: number;
  collectionURI: string;
  items: SeriesSummary[];
  returned: number;
}
