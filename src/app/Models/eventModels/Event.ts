import { CharacterList } from "./CharacterList";
import { ComicList } from "./ComicList";
import { CreatorList } from "./CreatorList";
import { EventSummary } from "./EventSummary";
import { Image } from "./Image";
import { SeriesList } from "./SeriesList";
import { StoryList } from "./StoryList";
import { URL } from "./URL";


export interface Event {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    urls: URL[];
    modified: Date;
    start: string;
    end: string;
    thumbnail: Image;
    comics: ComicList;
    stories: StoryList;
    series: SeriesList;
    characters: CharacterList;
    creators: CreatorList;
    next: EventSummary;
    previous: EventSummary;
}
