import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/Models/comicsModels/Comic';
import { series } from 'src/app/Models/seriesModels/series';
import { Story } from 'src/app/Models/storyModel/Story';
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
  stories: Story[] = []
  seriess: series[] = []
  // currentOffset: number = 0;
  limit: number = 4
  comicOffset: number = 0
  seriesOffset: number = 0
  storyOffset: number = 0
  // loaded: boolean = false;
  comicLoadBtn: boolean = false
  storyLoadBtn: boolean = false
  seriesLoadBtn:boolean = false
  id = this.route.snapshot.params['id'];

  constructor(private _getContentService: MarvelApiService,
    private _contentFunctionality: ContentFunctionalityService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.characterById(this.id)
    this.getComics(this.id, this.comicOffset)
    this.getStories(this.id, this.storyOffset)
    this.getSeries(this.id, this.seriesOffset)
  }

  characterById(id: number) {
    this._getContentService.getCharacter(id).subscribe((response) => {
      this.characters = response.data.results
      console.log(id);

    })
  }

  getComics(id: number, offset: number) {
    this._getContentService.comicsByCharacter(id, this.limit, offset).subscribe((response) => {
      this.comics = response.data.results;
      console.log(response);
      this.comicOffset += 4;
      this.comicLoadBtn = true
    })
  }

  loadComics() {
    this._getContentService.comicsByCharacter(this.id, this.limit, this.comicOffset).subscribe((response) => {
      this.comics = this.comics.concat(response.data.results);
      this.comicOffset += 4;
    })
  }

  getStories(id: number, offset: number) {
    this._getContentService.storyByCharacter(id, this.limit, offset).subscribe((response) => {
      this.stories = response.data.results;
      console.log(response);
      this.storyOffset += 4;
      this.storyLoadBtn = true
    })
  }

  loadStories() {
    this._getContentService.storyByCharacter(this.id, this.limit, this.storyOffset).subscribe((response) => {
      this.stories = this.stories.concat(response.data.results)
      this.storyOffset += 4
    })
  }

  getSeries(id: number, offset: number) {
    this._getContentService.seriesCharacter(id, this.limit, offset).subscribe((response) => {
      this.seriess = response.data.results;
      console.log(response);
      this.seriesOffset += 4;
      this.seriesLoadBtn = true
    })
  }

  loadSeries() {
    this._getContentService.seriesCharacter(this.id, this.limit, this.seriesOffset).subscribe((response) => {
      this.seriess = this.seriess.concat(response.data.results)
      this.seriesOffset += 4
    })
  }

  goBack() {
    this._contentFunctionality.goBack()
  }

}
