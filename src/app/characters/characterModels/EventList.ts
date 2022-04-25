import { EventSummary } from "./EventSummary";


export interface EventList {
  available: number;
  collectionURI: string;
  items: EventSummary[];
  returned: number;
}
