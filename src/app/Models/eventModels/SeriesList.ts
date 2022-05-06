import { EventSummary } from "./EventSummary";


export interface SeriesList {
    available: string;
    returned: string;
    collectionURI: string;
    items: EventSummary[];
}
