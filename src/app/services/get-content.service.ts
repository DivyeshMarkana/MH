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

  private base: string = 'https://gateway.marvel.com:443/v1/public/';
  // public endpoint: string = '';
  private token: string = 'ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146'


  constructor(private http: HttpClient) { }

  // character for home page offset 603
  getChar(limit?: number, offset?: number, id?: number): Observable<CharacterDataWrapper> {
    let endpoint: string = id ? `characters${"/" + id}?` : `characters?limit=${limit}&offset=${offset}&`
    let baseUrl: string = this.base + endpoint + this.token;

    return this.http.get<CharacterDataWrapper>(baseUrl)
  }
// comic for home page offset 60
  getComics(limit?: number, offset?: number, id?: number): Observable<ComicDataWrapper> {
    let endpoint: string = id ? `comics${"/" + id}?` : `comics?limit=${limit}&offset=${offset}&`
    let baseUrl: string = this.base + endpoint + this.token;

    return this.http.get<ComicDataWrapper>(baseUrl)
  }

  getSeries(limit?: number, offset?: number, id?: number): Observable<SeriesDataWrapper> {
    let endpoint: string = id ? `series${"/" + id}?` : `series?limit=${limit}&offset=${offset}&`
    let baseUrl: string = this.base + endpoint + this.token;

    return this.http.get<SeriesDataWrapper>(baseUrl)
  }

  getStories(limit?: number, offset?: number, id?: number): Observable<StoryDataWrapper> {
    let endpoint: string = id ? `stories${"/" + id}?` : `stories?limit=${limit}&offset=${offset}&`
    let baseUrl: string = this.base + endpoint + this.token;

    return this.http.get<StoryDataWrapper>(baseUrl)
  }

  getCreators(limit?: number, offset?: number, id?: number): Observable<CreatorDataWrapper> {
    let endpoint: string = id ? `creators${"/" + id}?` : `creators?limit=${limit}&offset=${offset}&`
    let baseUrl: string = this.base + endpoint + this.token;

    return this.http.get<CreatorDataWrapper>(baseUrl)
  }


  // items by comic id

  charByComic(id: number, limit: number, offset: number): Observable<CharacterDataWrapper> {
    let endpoint: string = `comics/${id}/characters?limit=${limit}&offset=${offset}&`
    let baseUrl = this.base + endpoint + this.token;

    return this.http.get<CharacterDataWrapper>(baseUrl)
  }

  storyByComic(id: number, limit: number, offset: number): Observable<StoryDataWrapper> {
    let endpoint: string = `comics/${id}/stories?limit=${limit}&offset=${offset}&`
    let baseUrl = this.base + endpoint + this.token;

    return this.http.get<StoryDataWrapper>(baseUrl)
  }


  // items by creator id

  comicByCreator(id: number, limit: number, offset: number): Observable<ComicDataWrapper> {
    let endpoint: string = `creators/${id}/comics?limit=${limit}&offset=${offset}&`
    let baseUrl = this.base + endpoint + this.token;

    return this.http.get<ComicDataWrapper>(baseUrl)
  }

  seriesByCreator(id: number, limit: number, offset: number): Observable<SeriesDataWrapper> {
    let endpoint: string = `creators/${id}/series?limit=${limit}&offset=${offset}&`
    let baseUrl = this.base + endpoint + this.token;

    return this.http.get<SeriesDataWrapper>(baseUrl)
  }

  storyByCreator(id: number, limit: number, offset: number): Observable<StoryDataWrapper> {
    let endpoint: string = `creators/${id}/stories?limit=${limit}&offset=${offset}&`
    let baseUrl = this.base + endpoint + this.token;

    return this.http.get<StoryDataWrapper>(baseUrl)
  }


  // items by series id

  charBySeries(id: number, limit: number, offset: number): Observable<CharacterDataWrapper> {
    let endpoint: string = `series/${id}/characters?limit=${limit}&offset=${offset}&`
    let baseUrl = this.base + endpoint + this.token;

    return this.http.get<CharacterDataWrapper>(baseUrl)
  }

  comicBySeries(id: number, limit: number, offset: number): Observable<ComicDataWrapper> {
    let endpoint: string = `series/${id}/comics?limit=${limit}&offset=${offset}&`
    let baseUrl = this.base + endpoint + this.token;

    return this.http.get<ComicDataWrapper>(baseUrl)
  }

  storiesBySeries(id: number, limit: number, offset: number): Observable<StoryDataWrapper> {
    let endpoint: string = `series/${id}/stories?limit=${limit}&offset=${offset}&`
    let baseUrl = this.base + endpoint + this.token;

    return this.http.get<StoryDataWrapper>(baseUrl)
  }


  // items by story id


  // character for home page offset 603
  // homeCharacter = 'https://gateway.marvel.com:443/v1/public/characters?limit=4&offset=345&ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146';

  // chracterForHome(): Observable<CharacterDataWrapper> {
  //   return this.http.get<CharacterDataWrapper>(this.homeCharacter)
  // }


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

  getCharacterByComic(id: number, offset: number): Observable<CharacterDataWrapper> {
    const characterByComic = `https://gateway.marvel.com:443/v1/public/comics/${id}/characters?limit=4&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

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

  getComicsByCharacter(id: number, offset: number): Observable<ComicDataWrapper> {
    const comicByHero = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?limit=4&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

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


  getStoriesByComic(id: number, offset: number): Observable<StoryDataWrapper> {
    const storiesByComic = `https://gateway.marvel.com:443/v1/public/comics/${id}/stories?limit=4&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

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
