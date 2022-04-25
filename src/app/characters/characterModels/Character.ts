import { Url } from "./Url";
import { EventList } from "./EventList";
import { StoryList } from "./StoryList";
import { SeriesList } from "./SeriesList";
import { ComicList } from "./ComicList";
import { Image } from "./Image";


export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Image;
  resourceURI: string;
  comics: ComicList;
  series: SeriesList;
  stories: StoryList;
  events: EventList;
  urls: Url[];
}
