import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterDataWrapper } from '../characters/characterModels/CharacterDataWrapper';
import { ComicDataWrapper } from '../comics/comicsModels/comicDataWrapper';
import { CreatorDataWrapper } from '../creator/creator/creatorModel/CreatorDataWrapper';
import { SeriesDataWrapper } from '../series/seriesModels/SeriesDataWrapper';
import { StoryDataWrapper } from '../stories/storyModel/StoryDataWrapper';

@Injectable({
  providedIn: 'root'
})
export class GetContentService {

  constructor(private http: HttpClient) { }

  //Get all characters

  // getCharactersURL = 'http://gateway.marvel.com/v1/public/characters?limit=10&ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146'

  // getCharacters(): Observable<CharacterDataWrapper> {
  //   return this.http.get<CharacterDataWrapper>(this.getCharactersURL)
  // }


  // offset character
  offsetCharacter(offset: number): Observable<CharacterDataWrapper> {
    const offsetCharacter = `https://gateway.marvel.com:443/v1/public/characters?limit=15&offset=${offset}&ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146`;

    return this.http.get<CharacterDataWrapper>(offsetCharacter)
  }

  // character for home page offset 603
  homeCharacter = 'https://gateway.marvel.com:443/v1/public/characters?limit=4&offset=345&ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146';

  chracterForHome(): Observable<CharacterDataWrapper> {
    return this.http.get<CharacterDataWrapper>(this.homeCharacter)
  }


  // comic for home page offset 605
  homeComic = 'https://gateway.marvel.com:443/v1/public/comics?limit=4&offset=605&ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146';

  comicForHome(): Observable<ComicDataWrapper> {
    return this.http.get<ComicDataWrapper>(this.homeComic)
  }

  // comic for home page offset 60
  homeSeries = 'https://gateway.marvel.com:443/v1/public/characters/1009282/series?limit=4&offset=60&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';

  seriesForHome(): Observable<SeriesDataWrapper> {
    return this.http.get<SeriesDataWrapper>(this.homeSeries)
  }

  getCharacterById(id: number): Observable<CharacterDataWrapper> {
    const characterById = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<CharacterDataWrapper>(characterById)
  }

  // get character by comic id

  getCharacterByComic(id: number): Observable<CharacterDataWrapper> {
    const characterByComic = `https://gateway.marvel.com:443/v1/public/comics/${id}/characters?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<CharacterDataWrapper>(characterByComic);
  }


  //Get all Comics

  // comicUrl = 'https://gateway.marvel.com/v1/public/comics?limit=100&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';


  // getAllComics(): Observable<ComicDataWrapper> {
  //   return this.http.get<ComicDataWrapper>(this.comicUrl)
  // }

  getAllComics(offset: number): Observable<ComicDataWrapper> {
    const comicUrl = `https://gateway.marvel.com/v1/public/comics?limit=15&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<ComicDataWrapper>(comicUrl)
  }

  // get comic by hero's name
  getComicsByHeroName(id: number): Observable<ComicDataWrapper> {
    const comicByHero = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<ComicDataWrapper>(comicByHero)
  }

  // get comic by id
  getComicsById(id: number): Observable<ComicDataWrapper> {
    const comicById = `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<ComicDataWrapper>(comicById)
  }

  // get all series

  // seriesUrl = 'https://gateway.marvel.com/v1/public/series?limit=50&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';

  // getAllSeries(): Observable<SeriesDataWrapper> {
  //   return this.http.get<SeriesDataWrapper>(this.seriesUrl)
  // }




  getAllSeries(offset: number): Observable<SeriesDataWrapper> {
    const seriesUrl = `https://gateway.marvel.com/v1/public/series?limit=15&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<SeriesDataWrapper>(seriesUrl)
  }


  // get series by id 

  getSeriesById(id: number): Observable<SeriesDataWrapper> {
    const seriesById = `https://gateway.marvel.com:443/v1/public/series/${id}?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<SeriesDataWrapper>(seriesById);
  }


  // get series by hero's name

  getSeriesByHeroName(id: number): Observable<SeriesDataWrapper> {
    const seriesByHero = `https://gateway.marvel.com:443/v1/public/characters/${id}/series?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<SeriesDataWrapper>(seriesByHero)
  }


  getStoriesByComic(id: number): Observable<StoryDataWrapper> {
    const storiesByComic = `https://gateway.marvel.com:443/v1/public/comics/${id}/stories?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<StoryDataWrapper>(storiesByComic)
  }


  // get all stories

  // storiesUrl = 'https://gateway.marvel.com/v1/public/stories?limit=100&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';


  // getAllStories(): Observable<StoryDataWrapper> {
  //   return this.http.get<StoryDataWrapper>(this.storiesUrl)
  // }




  getAllStories(offset: number): Observable<StoryDataWrapper> {
    const storiesUrl = `https://gateway.marvel.com/v1/public/stories?limit=15&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<StoryDataWrapper>(storiesUrl)
  }

  // get story by id

  getStoryById(id: number): Observable<StoryDataWrapper> {
    const getStory = `https://gateway.marvel.com:443/v1/public/stories/${id}?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<StoryDataWrapper>(getStory)
  }


  // creatorUrl = 'https://gateway.marvel.com/v1/public/creators?limit=30&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';


  // getAllcreator(): Observable<CreatorDataWrapper> {
  //   return this.http.get<CreatorDataWrapper>(this.creatorUrl)
  // }





  getAllcreator(offset: number): Observable<CreatorDataWrapper> {
    const creatorUrl = `https://gateway.marvel.com/v1/public/creators?limit=15&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<CreatorDataWrapper>(creatorUrl)
  }


  // get creator by id

  getCreatorById(id: number): Observable<CreatorDataWrapper> {
    const getCreator = `https://gateway.marvel.com:443/v1/public/creators/${id}?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<CreatorDataWrapper>(getCreator)
  }

  getComicByCreator(id: number): Observable<ComicDataWrapper> {
    const getComic = `https://gateway.marvel.com:443/v1/public/creators/${id}/comics?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<ComicDataWrapper>(getComic);
  }

  getSeriesByCreator(id: number): Observable<SeriesDataWrapper> {
    const getSeries = `https://gateway.marvel.com:443/v1/public/creators/${id}/series?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<SeriesDataWrapper>(getSeries);
  }

  getStoriesByCreator(id: number): Observable<StoryDataWrapper> {
    const getStories = `https://gateway.marvel.com:443/v1/public/creators/${id}/stories?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<StoryDataWrapper>(getStories);
  }

}
