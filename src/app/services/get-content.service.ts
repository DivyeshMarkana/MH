import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterDataWrapper } from '../characters/characterModels/CharacterDataWrapper';
import { ComicDataWrapper } from '../comics/comicsModels/comicDataWrapper';

@Injectable({
  providedIn: 'root'
})
export class GetContentService {

  constructor(private http: HttpClient) { }

  //Get all characters

  getCharactersURL = 'http://gateway.marvel.com/v1/public/characters?limit=20&ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146'

  getCharacters(): Observable<CharacterDataWrapper> {
    return this.http.get<CharacterDataWrapper>(this.getCharactersURL)
  }

  //Get all Comics

  comicUrl = 'https://gateway.marvel.com/v1/public/comics?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';


  getAllComics(): Observable<ComicDataWrapper> {
    return this.http.get<ComicDataWrapper>(this.comicUrl)
  }

}
