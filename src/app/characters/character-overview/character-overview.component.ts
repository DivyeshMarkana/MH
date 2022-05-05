import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/Models/comicsModels/Comic';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { Character } from '../../Models/characterModels/Character';

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

  constructor(private _getContentService: MarvelApiService,
    private _contentFunctionality: ContentFunctionalityService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this._getContentService.getCharacterById(this.id).subscribe((response) => {
    //   this.characters = response.data.results;
    // })
    this.characterById(this.id)

    // this.getComics(this.id, this.currentOffset);
    this.loaded = true;
  }

  characterById(id:number) {
    this._getContentService.getCharacter(id).subscribe((response) => {
      this.characters = response.data.results
      console.log(id);
      
    })
  }

  // getComics(id: number, offset: number) {
  //   this._getContentService.getComicsByCharacter(id, offset).subscribe((response) => {
  //     this.comics = this.comics.concat(response.data.results);
  //     console.log(response);
  //     this.currentOffset += 4;
  //   })
  // }

  // loadMore() {
  //   this._getContentService.getComicsByCharacter(this.id, this.currentOffset).subscribe((response) => {
  //     this.comics = this.comics.concat(response.data.results);
  //     this.currentOffset += 4;
  //   })
  // }

  goBack() {
    this._contentFunctionality.goBack()
  }

}
