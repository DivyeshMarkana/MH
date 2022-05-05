import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { marvelDataWrapper } from '../Models/marvelDataWrapper';
import { Character } from '../Models/characterModels/Character';
import { Comic } from '../Models/comicsModels/Comic';
import { Story } from '../Models/storyModel/Story';
import { series } from '../Models/seriesModels/series';
import { Creator } from '../Models/creatorModels/Creator';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private baseUrl: string = 'https://gateway.marvel.com:443/v1/public/';
  // public endpoint: string = '';
  private token: string = 'ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146'


  constructor(private http: HttpClient) { }

  // character for home page offset 603
  getCharacters(limit?: number, offset?: number): Observable<marvelDataWrapper<Character>> {
    let endpoint: string = `characters?limit=${limit}&offset=${offset}&`
    let requestUrl: string = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Character>>(requestUrl)
  }

  // get single character by id
  getCharacter(id: number): Observable<marvelDataWrapper<Character>> {
    let endpont: string = `characters${"/" + id}?`
    let requestUrl = this.baseUrl + endpont + this.token

    return this.http.get<marvelDataWrapper<Character>>(requestUrl)
  }

// comics for home page offset 605
  getComics(limit?: number, offset?: number): Observable<marvelDataWrapper<Comic>> {
    let endpoint: string = `comics?limit=${limit}&offset=${offset}&`
    let requestUrl: string = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Comic>>(requestUrl)
  }

  // get single comic by id
  getComic(id: number): Observable<marvelDataWrapper<Comic>> {
    let endpont: string = `comics${"/" + id}?`
    let requestUrl = this.baseUrl + endpont + this.token

    return this.http.get<marvelDataWrapper<Comic>>(requestUrl)
  }

  // get all series
  getSeries(limit?: number, offset?: number): Observable<marvelDataWrapper<series>> {
    let endpoint: string = `series?limit=${limit}&offset=${offset}&`
    let requestUrl: string = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<series>>(requestUrl)
  }

  // get single series by id
  getSeriesById(id: number): Observable<marvelDataWrapper<series>> {
    let endpont: string = `series${"/" + id}?`
    let requestUrl = this.baseUrl + endpont + this.token

    return this.http.get<marvelDataWrapper<series>>(requestUrl)
  }

  // get all stories
  getStories(limit?: number, offset?: number): Observable<marvelDataWrapper<Story>> {
    let endpoint: string = `stories?limit=${limit}&offset=${offset}&`
    let requestUrl: string = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Story>>(requestUrl)
  }

  // get single Story by id
  getStory(id: number): Observable<marvelDataWrapper<Story>> {
    let endpont: string = `stories${"/" + id}?`
    let requestUrl = this.baseUrl + endpont + this.token

    return this.http.get<marvelDataWrapper<Story>>(requestUrl)
  }

  // get all creators
  getCreators(limit?: number, offset?: number): Observable<marvelDataWrapper<Creator>> {
    let endpoint: string = `creators?limit=${limit}&offset=${offset}&`
    let requestUrl: string = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Creator>>(requestUrl)
  }

  // get single Story by id
  getCreator(id: number): Observable<marvelDataWrapper<Creator>> {
    let endpont: string = `creators${"/" + id}?`
    let requestUrl = this.baseUrl + endpont + this.token

    return this.http.get<marvelDataWrapper<Creator>>(requestUrl)
  }


  // items by character id

  comicsByCharacter(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Comic>> {
    let endpoint: string = `characters/${id}/comics?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Comic>>(requestUrl)
  }

  storyByCharacter(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Story>> {
    let endpoint: string = `characters/${id}/stories?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Story>>(requestUrl)
  }




  // items by comic id
  characterByComic(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Character>> {
    let endpoint: string = `comics/${id}/characters?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Character>>(requestUrl)
  }

  storyByComic(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Story>> {
    let endpoint: string = `comics/${id}/stories?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Story>>(requestUrl)
  }


  // items by creator id
  comicByCreator(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Comic>> {
    let endpoint: string = `creators/${id}/comics?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Comic>>(requestUrl)
  }

  seriesByCreator(id: number, limit: number, offset: number): Observable<marvelDataWrapper<series>> {
    let endpoint: string = `creators/${id}/series?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<series>>(requestUrl)
  }

  storyByCreator(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Story>> {
    let endpoint: string = `creators/${id}/stories?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Story>>(requestUrl)
  }


  // items by series id
  characterBySeries(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Character>> {
    let endpoint: string = `series/${id}/characters?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Character>>(requestUrl)
  }

  comicBySeries(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Comic>> {
    let endpoint: string = `series/${id}/comics?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Comic>>(requestUrl)
  }

  storiesBySeries(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Story>> {
    let endpoint: string = `series/${id}/stories?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Story>>(requestUrl)
  }


  // items by story id


  // character for home page offset 603
  // homeCharacter = 'https://gateway.marvel.com:443/v1/public/characters?limit=4&offset=345&ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146';

  // chracterForHome(): Observable<CharacterDataWrapper> {
  //   return this.http.get<CharacterDataWrapper>(this.homeCharacter)
  // }


  // comic for home page offset 605
  // homeComic = 'https://gateway.marvel.com:443/v1/public/comics?limit=4&offset=605&ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146';

  // comicForHome(): Observable<ComicDataWrapper> {
  //   return this.http.get<ComicDataWrapper>(this.homeComic)
  // }

  // // comic for home page offset 60
  // homeSeries = 'https://gateway.marvel.com:443/v1/public/characters/1009282/series?limit=4&offset=60&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';

  // seriesForHome(): Observable<SeriesDataWrapper> {
  //   return this.http.get<SeriesDataWrapper>(this.homeSeries)
  // }

  // getCharacterById(id: number): Observable<marvelDataWrapper> {
  //   const characterById = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<marvelDataWrapper>(characterById)
  // }

  // // get character by comic id

  // getCharacterByComic(id: number, offset: number): Observable<marvelDataWrapper> {
  //   const characterByComic = `https://gateway.marvel.com:443/v1/public/comics/${id}/characters?limit=4&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<marvelDataWrapper>(characterByComic);
  // }


  //Get all Comics

  // comicUrl = 'https://gateway.marvel.com/v1/public/comics?limit=100&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';


  // getAllComics(): Observable<ComicDataWrapper> {
  //   return this.http.get<ComicDataWrapper>(this.comicUrl)
  // }

  // getAllComics(offset: number): Observable<ComicDataWrapper> {
  //   const comicUrl = `https://gateway.marvel.com/v1/public/comics?limit=15&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<ComicDataWrapper>(comicUrl)
  // }

  // // get comic by hero's name
  // getComicsByHeroName(id: number): Observable<ComicDataWrapper> {
  //   const comicByHero = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<ComicDataWrapper>(comicByHero)
  // }

  // getComicsByCharacter(id: number, offset: number): Observable<ComicDataWrapper> {
  //   const comicByHero = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?limit=4&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<ComicDataWrapper>(comicByHero)
  // }

  // // get comic by id
  // getComicsById(id: number): Observable<ComicDataWrapper> {
  //   const comicById = `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<ComicDataWrapper>(comicById)
  // }

  // get all series

  // seriesUrl = 'https://gateway.marvel.com/v1/public/series?limit=50&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';

  // getAllSeries(): Observable<SeriesDataWrapper> {
  //   return this.http.get<SeriesDataWrapper>(this.seriesUrl)
  // }




  // getAllSeries(offset: number): Observable<SeriesDataWrapper> {
  //   const seriesUrl = `https://gateway.marvel.com/v1/public/series?limit=15&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<SeriesDataWrapper>(seriesUrl)
  // }


  // // get series by id 

  // getSeriesById(id: number): Observable<SeriesDataWrapper> {
  //   const seriesById = `https://gateway.marvel.com:443/v1/public/series/${id}?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<SeriesDataWrapper>(seriesById);
  // }


  // // get series by hero's name

  // getSeriesByHeroName(id: number): Observable<SeriesDataWrapper> {
  //   const seriesByHero = `https://gateway.marvel.com:443/v1/public/characters/${id}/series?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<SeriesDataWrapper>(seriesByHero)
  // }


  // getStoriesByComic(id: number, offset: number): Observable<StoryDataWrapper> {
  //   const storiesByComic = `https://gateway.marvel.com:443/v1/public/comics/${id}/stories?limit=4&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<StoryDataWrapper>(storiesByComic)
  // }


  // get all stories

  // storiesUrl = 'https://gateway.marvel.com/v1/public/stories?limit=100&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';


  // getAllStories(): Observable<StoryDataWrapper> {
  //   return this.http.get<StoryDataWrapper>(this.storiesUrl)
  // }




  // getAllStories(offset: number): Observable<StoryDataWrapper> {
  //   const storiesUrl = `https://gateway.marvel.com/v1/public/stories?limit=15&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<StoryDataWrapper>(storiesUrl)
  // }

  // // get story by id

  // getStoryById(id: number): Observable<StoryDataWrapper> {
  //   const getStory = `https://gateway.marvel.com:443/v1/public/stories/${id}?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<StoryDataWrapper>(getStory)
  // }


  // creatorUrl = 'https://gateway.marvel.com/v1/public/creators?limit=30&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';


  // getAllcreator(): Observable<CreatorDataWrapper> {
  //   return this.http.get<CreatorDataWrapper>(this.creatorUrl)
  // }





  // getAllcreator(offset: number): Observable<CreatorDataWrapper> {
  //   const creatorUrl = `https://gateway.marvel.com/v1/public/creators?limit=15&offset=${offset}&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<CreatorDataWrapper>(creatorUrl)
  // }


  // // get creator by id

  // getCreatorById(id: number): Observable<CreatorDataWrapper> {
  //   const getCreator = `https://gateway.marvel.com:443/v1/public/creators/${id}?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<CreatorDataWrapper>(getCreator)
  // }

  // getComicByCreator(id: number): Observable<ComicDataWrapper> {
  //   const getComic = `https://gateway.marvel.com:443/v1/public/creators/${id}/comics?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<ComicDataWrapper>(getComic);
  // }

  // getSeriesByCreator(id: number): Observable<SeriesDataWrapper> {
  //   const getSeries = `https://gateway.marvel.com:443/v1/public/creators/${id}/series?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<SeriesDataWrapper>(getSeries);
  // }

  // getStoriesByCreator(id: number): Observable<StoryDataWrapper> {
  //   const getStories = `https://gateway.marvel.com:443/v1/public/creators/${id}/stories?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

  //   return this.http.get<StoryDataWrapper>(getStories);
  // }

}
