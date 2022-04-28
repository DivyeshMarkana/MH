import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GetContentService } from '../services/get-content.service';
import { Character } from './characterModels/Character';
import { MatDialog } from '@angular/material/dialog';
import { ComicByHeroComponent } from '../comic-by-hero/comic-by-hero.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('loadButton') public loadButton:ElementRef

  characters: Character[] = [];
  dataCharacters: Character[] = [];
  subscription
  fetching: boolean = false;
  searchTerm: string = '';
  loaded:boolean = false

  currentIndex = 0;
  maxResult =  10;

  constructor(
    private _getContentService: GetContentService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCharacter()
    
  }

  searchCharacter(){
    this.characters = this.dataCharacters.filter( (search) => {
     return search.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    } );
  }

  getCharacter() {
    this.fetching = true;
    this.subscription = this._getContentService.getCharacters().subscribe((response => {
      // console.log(response);
      
      this.characters = response.data.results;
      this.dataCharacters = response.data.results;
      this.fetching = false;
      this.loaded = true;
    }))
  }

  openDialog(id) {
    return this.dialog.open(ComicByHeroComponent, { data: { id: id }});

    // dialogRef.afterClosed().subscribe(result => {
    //   // console.log(`Dialog result: ${result}`);
    // });
  }

  ngAfterViewInit(): void {
    // this.loadButton.nativeElement.classList = 'hidden'
      // console.log(this.loadButton);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    // console.log('character unsubscribe');
  }

}
