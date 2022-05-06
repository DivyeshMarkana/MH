import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { marvelDataWrapper } from '../Models/marvelDataWrapper';
import { Character } from '../Models/characterModels/Character';
import { Comic } from '../Models/comicsModels/Comic';
import { Story } from '../Models/storyModel/Story';
import { series } from '../Models/seriesModels/series';
import { Creator } from '../Models/creatorModels/Creator';
import { Event } from '../Models/eventModels/Event';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private baseUrl: string = 'https://gateway.marvel.com:443/v1/public/';
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

  // get single creator by id
  getCreator(id: number): Observable<marvelDataWrapper<Creator>> {
    let endpont: string = `creators${"/" + id}?`
    let requestUrl = this.baseUrl + endpont + this.token

    return this.http.get<marvelDataWrapper<Creator>>(requestUrl)
  }

  // get all events
  getEvents(limit?: number, offset?: number): Observable<marvelDataWrapper<Event>> {
    let endpoint: string = `events?limit=${limit}&offset=${offset}&`
    let requestUrl: string = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Event>>(requestUrl)
  }

  // get single event by id
  getEvent(id: number): Observable<marvelDataWrapper<Event>> {
    let endpont: string = `events${"/" + id}?`
    let requestUrl = this.baseUrl + endpont + this.token

    return this.http.get<marvelDataWrapper<Event>>(requestUrl)
  }


  // items by character id

  comicsByCharacter(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Comic>> {
    let endpoint: string = `characters/${id}/comics?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Comic>>(requestUrl)
  }

  seriesCharacter(id: number, limit: number, offset: number): Observable<marvelDataWrapper<series>> {
    let endpoint: string = `characters/${id}/series?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<series>>(requestUrl)
  }

  storyByCharacter(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Story>> {
    let endpoint: string = `characters/${id}/stories?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Story>>(requestUrl)
  }

  eventByCharacter(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Event>> {
    let endpoint: string = `characters/${id}/events?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Event>>(requestUrl)
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

  eventByCreator(id: number, limit: number, offset: number): Observable<marvelDataWrapper<Event>> {
    let endpoint: string = `creators/${id}/events?limit=${limit}&offset=${offset}&`
    let requestUrl = this.baseUrl + endpoint + this.token;

    return this.http.get<marvelDataWrapper<Event>>(requestUrl)
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
}
