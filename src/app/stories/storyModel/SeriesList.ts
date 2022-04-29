import { seriesSummary } from "./seriesSummary";


export interface SeriesList {
    available: number;
    returned: number;
    collectionURI: string;
    items: seriesSummary[];
}
