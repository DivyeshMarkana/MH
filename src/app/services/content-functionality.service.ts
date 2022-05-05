import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharacterDataWrapper } from '../Models/characterModels/CharacterDataWrapper';
import { ComicByHeroComponent } from '../comics/comic-by-hero/comic-by-hero.component';
import { SeriesByHeroComponent } from '../series/series-by-hero/series-by-hero.component';

@Injectable({
  providedIn: 'root'
})
export class ContentFunctionalityService {

  constructor(private dialog: MatDialog,
    private location: Location,
    private http: HttpClient) { }

  goComics(id: number) {
    return this.dialog.open(ComicByHeroComponent, { data: { id: id } });
  }

  goseries(id: number) {
    return this.dialog.open(SeriesByHeroComponent, { data: { id: id } });
  }

  goBack() {
    this.location.back();
  }

  testUrl<T>(endpoint: string, completion: (value: T)=>void){
    const baseUrl = 'https://gateway.marvel.com:443/v1/public/' + endpoint + 'ts=1649611383&apikey=39b79c3e2d8f60abcd03f5d6046a7dcf&hash=788418b31f3fbc875e1cf6d7f1c9e7e6';
    // alert(baseUrl)
    console.log(baseUrl);
    
     this.http.get<T>(baseUrl).subscribe(completion);
  }

  loadMore<T>(){

  }
}

