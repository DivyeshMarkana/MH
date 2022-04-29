import { EventSummary } from "./EventSummary";


export interface EventList {
    available: string;
    returned: string;
    collectionURI: string;
    items: EventSummary[];
}
