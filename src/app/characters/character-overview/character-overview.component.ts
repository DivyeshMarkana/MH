import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/comics/comicsModels/Comic';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { GetContentService } from 'src/app/services/get-content.service';
import { Character } from '../characterModels/Character';

@Component({
  selector: 'app-character-overview',
  templateUrl: './character-overview.component.html',
  styleUrls: ['./character-overview.component.css']
})
export class CharacterOverviewComponent implements OnInit {

  characters: Character[];
  comics: Comic[] = [];
  currentOffset: number = 0;
  loaded: boolean = false;
  id = this.route.snapshot.params['id'];

  constructor(private _getContentService: GetContentService,
    private _contentFunctionality: ContentFunctionalityService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this._getContentService.getCharacterById(this.id).subscribe((response) => {
    //   this.characters = response.data.results;
    // })
    this.charById(this.id)

    this.getComics(this.id, this.currentOffset);
    this.loaded = true;
  }

  charById(id:number) {
    this._getContentService.getChar(undefined, undefined, id).subscribe((response) => {
      this.characters = response.data.results
      console.log(id);
      
    })
  }

  getComics(id: number, offset: number) {
    this._getContentService.getComicsByCharacter(id, offset).subscribe((response) => {
      this.comics = this.comics.concat(response.data.results);
      console.log(response);
      this.currentOffset += 4;
    })
  }

  loadMore() {
    this._getContentService.getComicsByCharacter(this.id, this.currentOffset).subscribe((response) => {
      this.comics = this.comics.concat(response.data.results);
      this.currentOffset += 4;
    })
  }

  goBack() {
    this._contentFunctionality.goBack()
  }

}
