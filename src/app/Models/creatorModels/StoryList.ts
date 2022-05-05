import { StorySummary } from "./StorySummary";


export interface StoryList {
    available: string;
    returned: string;
    collectionURI: string;
    items: StorySummary[];
}
