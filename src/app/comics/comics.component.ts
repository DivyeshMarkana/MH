import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  searchTerm: string = ''
  subscription


  constructor(private _getContentService: GetContentService) { }

  ngOnInit(): void {
    this.getComic()
  }

  searchComic() {
    this.comics = this.dataComic.filter((search) => {
      return search.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    });
    //  console.log(this.comics);
  }

  getComic() {
    this.fetching = true;
    this.subscription = this._getContentService.getAllComics().subscribe((response => {
      // console.log(response);
      this.comics = response.data.results;
      this.dataComic = response.data.results;
      this.fetching = false;
      this.loaded = true;
    }))
  }

}
