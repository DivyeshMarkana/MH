import { ComicList } from "./ComicList";
import { EventList } from "./EventList";
import { Image } from "./Image";
import { SeriesList } from "./SeriesList";
import { StoryList } from "./StoryList";
import { URL } from "./URL";


export interface CreatorDataContainer {
    offset: string;
    limit: string;
    total: string;
    count: string;
    results: Creator[];
}

export interface Creator {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    fullName: string;
    modified: Date;
    resourceURI: string;
    urls: URL[];
    thumbnail: Image;
    series: SeriesList;
    stories: StoryList;
    comics: ComicList;
    events: EventList;
}
