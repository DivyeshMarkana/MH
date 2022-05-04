import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../characters/characterModels/Character';
import { Comic } from '../comicsModels/Comic';
import { ContentFunctionalityService } from '../../services/content-functionality.service';
import { GetContentService } from '../../services/get-content.service';
import { Story } from '../../stories/storyModel/Story';
import { CharacterDataWrapper } from 'src/app/characters/characterModels/CharacterDataWrapper';

@Component({
  selector: 'app-comic-overview',
  templateUrl: './comic-overview.component.html',
  styleUrls: ['./comic-overview.component.css']
})
export class ComicOverviewComponent implements OnInit {

  comics: Comic[];
  comicCharacters: Character[] = [];
  stories: Story[] = [];
  loaded: boolean = false;
  characterOffset: number = 0;
  storyOffset: number = 0;
  id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute,
    private _getContentService: GetContentService,
    private _contentFunctionality: ContentFunctionalityService) {
    route.paramMap.subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.getComicById(this.id)
    // this.getComicCharacter(this.id, this.currentOffset)
    // this.getCharacter(this.id, this.characterOffset)
    this.getStoriesById(this.id, this.storyOffset)
  }


  // getCharacter(id: number, offset: number) {
  //   this._contentFunctionality.testUrl<CharacterDataWrapper>(`comics/${id}/characters?limit=4&offset${offset}&`, (response: CharacterDataWrapper) => {
  //     this.comicCharacters = response.data.results
  //     console.log(response);

  //     this.characterOffset += 4;
  //   })
  // }

  loadChar() {
    this._contentFunctionality.testUrl<CharacterDataWrapper>(`characters/${this.id}?limit=4&offset${this.characterOffset}&`, (response: CharacterDataWrapper) => {
      this.comicCharacters = this.comicCharacters.concat(response.data.results)
    })
  }

  // getComicById(id) {
  //   this._getContentService.getComicsById(id).subscribe((response) => {
  //     // console.log(response);
  //     this.comics = response.data.results;
  //   })
  // }

  getComicById(id) {
    this._getContentService.getComics(undefined, undefined, id).subscribe((response) => {
      // console.log(response);
      this.comics = response.data.results;
    })
  }


  // getComicCharacter(id: number, offset: number) {
  //   this._getContentService.getCharacterByComic(id, offset).subscribe((response) => {
  //     this.comicCharacters = response.data.results;
  //     this.currentOffset += 4;
  //     this.loaded = true;
  //     // console.log(response);

  //   })
  // }

  // loadMoreCharacter() {
  //   this._getContentService.getCharacterByComic(this.id, this.currentOffset).subscribe((response) => {
  //     this.comicCharacters = this.comicCharacters.concat(response.data.results);
  //     this.currentOffset += 4;
  //   })
  // }



  gotoComic(id) {
    this._contentFunctionality.goComics(id)
  }

  gotoSeries(id) {
    this._contentFunctionality.goseries(id)
  }

  goBack() {
    this._contentFunctionality.goBack()
  }

  getStoriesById(id: number, offset: number) {
    this._getContentService.getStoriesByComic(id, offset).subscribe((response) => {
      // console.log(response);
      this.stories = response.data.results
      this.storyOffset += 4;
      // alert( this.currentOffset)
    })
  }

  loadMoreStory() {
    this._getContentService.getStoriesByComic(this.id, this.storyOffset).subscribe((response) => {
      this.stories = this.stories.concat(response.data.results);
      this.storyOffset += 4;
    })

  }


}
