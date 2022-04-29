import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../characters/characterModels/Character';
import { CharacterDataWrapper } from '../characters/characterModels/CharacterDataWrapper';
import { Comic } from '../comics/comicsModels/Comic';
import { ComicDataWrapper } from '../comics/comicsModels/comicDataWrapper';
import { SeriesDataWrapper } from '../series/seriesModels/SeriesDataWrapper';
import { StoryDataWrapper } from '../stories/storyModel/StoryDataWrapper';

@Injectable({
  providedIn: 'root'
})
export class GetContentService {

  constructor(private http: HttpClient) { }

  //Get all characters

  getCharactersURL = 'http://gateway.marvel.com/v1/public/characters?limit=50&ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146'

  getCharacters(): Observable<CharacterDataWrapper> {
    return this.http.get<CharacterDataWrapper>(this.getCharactersURL)
  }

  getCharacterById(id:number):Observable<CharacterDataWrapper> {
    const characterById = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<CharacterDataWrapper>(characterById)
  }

  // get character by comic id

  getCharacterByComic(id: number): Observable<CharacterDataWrapper>{

    const characterByComic = `https://gateway.marvel.com:443/v1/public/comics/${id}/characters?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<CharacterDataWrapper>(characterByComic);
  }


  //Get all Comics

  comicUrl = 'https://gateway.marvel.com/v1/public/comics?limit=100&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';


  getAllComics(): Observable<ComicDataWrapper> {
    return this.http.get<ComicDataWrapper>(this.comicUrl)
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

  seriesUrl = 'https://gateway.marvel.com/v1/public/series?limit=50&ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';

  getAllSeries(): Observable<SeriesDataWrapper> {
    return this.http.get<SeriesDataWrapper>(this.seriesUrl)
  }


  // get series by hero's name

  getSeriesByHeroName(id: number): Observable<SeriesDataWrapper> {

    const seriesByHero = `https://gateway.marvel.com:443/v1/public/characters/${id}/series?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<SeriesDataWrapper>(seriesByHero)
  }


  getStoriesByComic(id:number):Observable<StoryDataWrapper> {
    
    const storiesByComic = `https://gateway.marvel.com:443/v1/public/comics/${id}/stories?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6`;

    return this.http.get<StoryDataWrapper>(storiesByComic)
  }

}
