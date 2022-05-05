import { CharacterList } from "./CharacterList";
import { ComicList } from "./ComicList";
import { ComicSummary } from "./ComicSummary";
import { CreatorList } from "./CreatorList";
import { EventList } from "./EventList";
import { Image } from "./Image";
import { SeriesList } from "./SeriesList";


export interface Story {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    type: string;
    modified: Date;
    thumbnail: Image;
    comics: ComicList;
    series: SeriesList;
    events: EventList;
    characters: CharacterList;
    creators: CreatorList;
    originalissue: ComicSummary;
}
