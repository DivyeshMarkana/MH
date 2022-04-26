import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetContentService } from '../services/get-content.service';
import { Character } from './characterModels/Character';
import { MatDialog } from '@angular/material/dialog';
import { ComicByHeroComponent } from '../comic-by-hero/comic-by-hero.component';
import { Comic } from '../comics/comicsModels/Comic';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = []

  // comics: Comic[] = []

  subscription

  fetching:boolean = false;

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
      // console.log(response);
      for (const iterator of this.characters) {
        console.log(iterator);
        
      }


     }))
    // this.fetching = false;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ComicByHeroComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  // getComicsByName(id: number){

  //   this.comicModal = true
  //   this._getContentService.getComicsByHeroName(id).subscribe( (response) => {
  //     this.comics = response.data.results;
  //     console.log(response);
      
  //   } )
  // }



  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    console.log('character unsubscribe');
  }

}
