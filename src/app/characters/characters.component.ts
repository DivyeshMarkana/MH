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
  currentOffset = 0;

  constructor(
    private _getContentService: GetContentService,
    private _contentFunctionality: ContentFunctionalityService) { }

  ngOnInit(): void {
    // this.getCharacter()
    this.offsetChar(this.currentOffset)
  }

  searchCharacter() {
    this.characters = this.dataCharacters.filter((search) => {
      return search.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    });
  }

  // getCharacter() {
  //   this.fetching = true;
  //   this.subscription = this._getContentService.getCharacters().subscribe((response => {
  //     console.log(response);

  //     this.characters = response.data.results;
  //     this.dataCharacters = response.data.results;
  //     this.fetching = false;
  //     this.loaded = true;
  //   }))
  // }

  // offsetChar(offset: number) {
  //   this._getContentService.offsetCharacter(offset).subscribe((response => {
  //     this.characters = response.data.results;
  //     this.dataCharacters = response.data.results;
  //     this.fetching = false;
  //     this.loaded = true;
  //   }))
  // }

  // loadMore() {
  //   this.currentOffset += 15
  //   const updated = this.offsetChar(this.currentOffset)
  //   this.characters.concat(this.characters);
  // }

  offsetChar(offset: number) {
    this._getContentService.offsetCharacter(offset).subscribe((response => {
      this.characters = response.data.results;
      this.dataCharacters = response.data.results;
      this.loaded = true;
      this.currentOffset += 15;
    }))
  }

  loadMore() {
    this.currentOffset += 15;
    this._getContentService.offsetCharacter(this.currentOffset).subscribe((response => {
      this.characters = this.characters.concat(response.data.results);
      this.loaded = true;

    }))
  }

  gotoComic(id) {
    this._contentFunctionality.goComics(id)
  }

  gotoSeries(id) {
    this._contentFunctionality.goseries(id)
  }
}
