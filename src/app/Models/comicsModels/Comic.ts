import { CharacterList } from "./CharacterList";
import { ComicDate } from "./ComicDate";
import { ComicPrice } from "./ComicPrice";
import { ComicSummary } from "./ComicSummary";
import { CreatorList } from "./CreatorList";
import { EventList } from "./EventList";
import { Image } from "./Image";
import { SeriesSummary } from "./SeriesSummary";
import { StoryList } from "./StoryList";
import { TextObject } from "./TextObject";
import { Url } from "./Url";


export interface Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: string;
    variantDescription: string;
    description: string;
    modified: ComicDate;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: TextObject;
    resourceURI: string;
    urls: Url;
    series: SeriesSummary;
    variants: ComicSummary;
    collections: ComicSummary;
    collectedIssues: ComicSummary;
    dates: ComicDate;
    prices: ComicPrice;
    thumbnail: Image;
    images: Image;
    creators: CreatorList;
    characters: CharacterList;
    stories: StoryList;
    events: EventList;
}
