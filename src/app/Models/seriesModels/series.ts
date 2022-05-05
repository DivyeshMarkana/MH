import { CreatorList } from "./CreatorList";
import { EventList } from "./EventList";
import { EventSummary } from "./EventSummary";
import { Image } from "./Image";
import { StoryList } from "./StoryList";
import { URL } from "./URL";


export interface series {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    urls: URL[];
    startYear: number;
    endYear: number;
    rating: string;
    modified: Date;
    thumbnail: Image;
    comics: EventList;
    stories: StoryList;
    events: EventList;
    characters: CreatorList;
    creators: CreatorList;
    next: EventSummary;
    previous: EventSummary;
}
