import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharacterService } from './character.service';
import { Character } from './characterModels/Character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = []

  subscription

  // fetching:boolean = false;

  constructor(private _cs: CharacterService) { }

  ngOnInit(): void {
    // this.fetching = true;
    // this.subscription = this._cs.getCharacters().subscribe((response => this.characters = response.data.results))
    // this.fetching = false;

    this.getCharacter()
  }

  getCharacter() {
    // this.fetching = true;
    this.subscription = this._cs.getCharacters().subscribe((response => { this.characters = response.data.results; console.log(response);
     }))
    // this.fetching = false;
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    console.log('character unsubscribe');
  }

}
