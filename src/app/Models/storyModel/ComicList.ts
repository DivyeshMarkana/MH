import { ComicSummary } from "./ComicSummary";


export interface ComicList {
    available: string;
    returned: string;
    collectionURI: string;
    items: ComicSummary[];
}
