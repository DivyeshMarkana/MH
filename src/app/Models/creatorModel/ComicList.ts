import { ComicsSummary } from "./ComicsSummary";


export interface ComicList {
    available: number;
    returned: number;
    collectionURI: string;
    items: ComicsSummary[];
}
