import { Component, OnInit } from '@angular/core';
import { GetContentService } from '../services/get-content.service';
import { Comic } from './comicsModels/Comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics: Comic[] = []
  dataComic: Comic[] = [];
  fetching: boolean = false;
  loaded: boolean = false;
  searchTerm: string = '';
  limit: number = 15
  comicOffset: number = 0;
  subscription


  constructor(private _getContentService: GetContentService) { }

  ngOnInit(): void {
    this.getComic(this.comicOffset)
  }

  searchComic() {
    this.comics = this.dataComic.filter((search) => {
      return search.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    });
  }

  // getComic(offset: number) {
  //   this.fetching = true;
  //   this._getContentService.getAllComics(offset).subscribe((response) => {
  //     this.comics = response.data.results;
  //     this.dataComic = response.data.results;
  //     this.currentOffset += 15
  //     this.fetching = false;
  //     this.loaded = true;
  //   })
  // }

  // loadMore() {
  //   this.currentOffset += 15;
  //   this._getContentService.getAllComics(this.currentOffset).subscribe((response) => {
  //     this.comics = this.comics.concat(response.data.results);
  //     this.currentOffset += 15
  //   })
  // }


  getComic(offset: number) {
    this.fetching = true;
    this._getContentService.getComics(this.limit, offset).subscribe((response) => {
      this.comics = response.data.results;
      this.dataComic = response.data.results;
      this.comicOffset += 15
      this.fetching = false;
      this.loaded = true;
    })
  }

  loadMore() {
    this._getContentService.getComics(this.limit, this.comicOffset).subscribe((response) => {
      this.comics = this.comics.concat(response.data.results);
      this.loaded = true;
      this.comicOffset += 15;
    })
  }

}
