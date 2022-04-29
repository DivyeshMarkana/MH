import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GetContentService } from '../services/get-content.service';
import { Character } from './characterModels/Character';
// import { MatDialog } from '@angular/material/dialog';
// import { ComicByHeroComponent } from '../comic-by-hero/comic-by-hero.component';
// import { SeriesByHeroComponent } from '../series-by-hero/series-by-hero.component';
import { ContentFunctionalityService } from '../services/content-functionality.service';

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
    // private dialog: MatDialog,
    private _contentFunctionality: ContentFunctionalityService) { }

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
      console.log(response);
      
      this.characters = response.data.results;
      this.dataCharacters = response.data.results;
      this.fetching = false;
      this.loaded = true;
    }))
  }

  gotoComic(id) {
    this._contentFunctionality.goComics(id)
  }

  gotoSeries(id){
    this._contentFunctionality.goseries(id)
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
