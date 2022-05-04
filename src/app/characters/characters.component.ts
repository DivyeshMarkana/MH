import { Component, OnInit } from '@angular/core';
import { GetContentService } from '../services/get-content.service';
import { Character } from './characterModels/Character';
import { ContentFunctionalityService } from '../services/content-functionality.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  dataCharacters: Character[] = [];
  subscription
  fetching: boolean = false;
  searchTerm: string = '';
  loaded: boolean = false
  charoff: number = 0;
  limit: number = 15

  constructor(
    private _getContentService: GetContentService,
    private _contentFunctionality: ContentFunctionalityService) { }

  ngOnInit(): void {
    this.getCharacter(this.charoff)
  }

  searchCharacter() {
    this.characters = this.dataCharacters.filter((search) => {
      return search.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    });
  }

  getCharacter(offset: number) {
    this.fetching = true;
    this._getContentService.getChar(this.limit, offset).subscribe((response) => {
      this.characters = response.data.results
      this.dataCharacters = response.data.results;
      this.charoff += 15;
      this.fetching = false;
      this.loaded = true;
    })
  }

  loadMore() {
    this._getContentService.getChar(this.limit, this.charoff).subscribe((response => {
      this.characters = this.characters.concat(response.data.results);
      this.loaded = true;
      this.charoff += 15;
    }))
  }

  gotoComic(id: number) {
    this._contentFunctionality.goComics(id)
  }

  gotoSeries(id: number) {
    this._contentFunctionality.goseries(id)
  }
}
