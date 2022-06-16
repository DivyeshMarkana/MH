import { Component, OnDestroy, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-api.service';
import { Character } from '../../Models/characterModels/Character';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {

  characters: Character[] = [];
  subscription: Subscription
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

  getCharacter(offset: number) {
    this.fetching = true;
    this.subscription = this._getContentService.getCharacters(this.limit, offset).subscribe((response) => {
      this.characters = response.data.results
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
