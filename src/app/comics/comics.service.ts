import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicDataWrapper } from './comicsModels/comicDataWrapper';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  // Url = 'http://gateway.marvel.com/v1/public/comics?limit=20&ts=1650715932&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=09170cf850ac95d9120904a5e7b2b146'

  // Url = 'https://gateway.marvel.com:443/v1/public/comics?apikey='
  comicUrl = 'https://gateway.marvel.com/v1/public/comics?ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';

  
  constructor(private http: HttpClient) { }

  getComics(): Observable<ComicDataWrapper> {
    return this.http.get<ComicDataWrapper>(this.comicUrl)
  }
}

