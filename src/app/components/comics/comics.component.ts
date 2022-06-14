import { Component, OnDestroy, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-api.service';
import { Comic } from '../../Models/comicsModels/Comic';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit, OnDestroy {
  comics: Comic[] = []
  dataComic: Comic[] = [];
  fetching: boolean = false;
  comicLoadBtn: boolean = false;
  searchTerm: string = '';
  limit: number = 15
  comicOffset: number = 0;
  subscription: Subscription


  constructor(private _getContentService: MarvelApiService) { }

  ngOnInit(): void {
    this.getComic(this.comicOffset)
  }

  searchComic() {
    this.comics = this.dataComic.filter((search) => {
      return search.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    });
  }

  getComic(offset: number) {
    this.fetching = true;
   this.subscription = this._getContentService.getComics(this.limit, offset).subscribe((response) => {
      this.comics = response.data.results;
      this.dataComic = response.data.results;
      this.comicOffset += 15
      this.fetching = false;
      this.comicLoadBtn = true;
    })
  }

  loadMore() {
    this._getContentService.getComics(this.limit, this.comicOffset).subscribe((response) => {
      this.comics = this.comics.concat(response.data.results);
      this.comicLoadBtn = true;
      this.comicOffset += 15;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
