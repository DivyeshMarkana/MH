import { EventSummary } from "./EventSummary";


export interface EventList {
    available: number;
    returned: number;
    collectionURI: string;
    items: Array<EventSummary>[];
}
