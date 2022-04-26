import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetContentService } from '../services/get-content.service';
import { Character } from './characterModels/Character';
import { MatDialog } from '@angular/material/dialog';
import { ComicByHeroComponent } from '../comic-by-hero/comic-by-hero.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = []

  subscription

  // fetching:boolean = false;

  constructor(
    private _getContentService: GetContentService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCharacter()
  }

  getCharacter() {
    // this.fetching = true;
    this.subscription = this._getContentService.getCharacters().subscribe((response => { 
      this.characters = response.data.results;
      console.log(response);
      
     }))
    // this.fetching = false;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ComicByHeroComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    console.log('character unsubscribe');
  }

}
