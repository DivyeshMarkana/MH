import { StorySummary } from "./StorySummary";


export interface StoryList {
  available: number;
  collectionURI: string;
  items: StorySummary[];
  returned: number;
}
