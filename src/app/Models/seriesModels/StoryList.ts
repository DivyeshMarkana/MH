import { StorieSummary } from "./StorieSummary";


export interface StoryList {
    available: number;
    returned: number;
    collectionURI: string;
    items: StorieSummary[];
}
