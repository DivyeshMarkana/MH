import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComicByHeroComponent } from '../comic-by-hero/comic-by-hero.component';
import { SeriesByHeroComponent } from '../series-by-hero/series-by-hero.component';

@Injectable({
  providedIn: 'root'
})
export class ContentFunctionalityService {

  constructor( private dialog: MatDialog) { }

  goComics(id: number){
    return this.dialog.open(ComicByHeroComponent, { data: { id: id }});
  }

  goseries(id: number){
    return this.dialog.open(SeriesByHeroComponent, { data: { id: id }});
  }
}

