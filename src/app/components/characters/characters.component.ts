import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-api.service';
import { Character } from '../../Models/characterModels/Character';
import { ContentFunctionalityService } from '../../services/content-functionality.service';

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
  characterLoadBtn: boolean = false
  characterOffset: number = 0;
  limit: number = 15

  constructor(
    private _getContentService: MarvelApiService) { }

  ngOnInit(): void {
    this.getCharacter(this.characterOffset)
  }

  searchCharacter() {
    this.characters = this.dataCharacters.filter((search) => {
      return search.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    });
  }

  getCharacter(offset: number) {
    this.fetching = true;
    this._getContentService.getCharacters(this.limit, offset).subscribe((response) => {
      this.characters = response.data.results
      this.dataCharacters = response.data.results;
      console.log(response);

      this.characterOffset += 15;
      this.fetching = false;
      this.characterLoadBtn = true;
    })
  }

  loadMore() {
    this._getContentService.getCharacters(this.limit, this.characterOffset).subscribe((response => {
      this.characters = this.characters.concat(response.data.results);
      this.characterOffset += 15;
    }))
  }
}
