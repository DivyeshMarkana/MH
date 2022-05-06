import { EventSummary } from "./EventSummary";


export interface ComicList {
    available: string;
    returned: string;
    collectionURI: string;
    items: EventSummary[];
}
