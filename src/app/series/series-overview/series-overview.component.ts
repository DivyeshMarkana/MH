import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/Models/characterModels/Character';
import { Comic } from 'src/app/Models/comicsModels/Comic';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { Story } from 'src/app/Models/storyModel/Story';
import { series } from '../../Models/seriesModels/series';

@Component({
  selector: 'app-series-overview',
  templateUrl: './series-overview.component.html',
  styleUrls: ['./series-overview.component.css']
})
export class SeriesOverviewComponent implements OnInit {

  seriess: series[] = []
  characters: Character[] = []
  comics: Comic[] = []
  stories: Story[] = []

  limit: number = 4;
  charOffset: number = 0;
  comicOffset: number = 0;
  storyOffset: number = 0;

  charLoadBtn: boolean = false;
  comicLoadBtn: boolean = false;
  storyLoadBtn: boolean = false;

  loaded: boolean = false;
  fetching: boolean = false;

  id = this.route.snapshot.params['id'];

  constructor(private _getContentService: MarvelApiService,
    private _contentFunctionality: ContentFunctionalityService
    , private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.fetching = false;
    this._getContentService.getSeriesById( this.id).subscribe((response) => {
      this.seriess = response.data.results;
      // console.log(response);
      this.fetching = true;
      this.loaded = true;


      this.getCharacters(this.id, this.charOffset)
      this.getComics(this.id, this.comicOffset)
      this.getStories(this.id, this.storyOffset)
    })
  }

  getCharacters(id: number, offset: number) {
    this._getContentService.characterBySeries(id, this.limit, offset).subscribe((response) => {
      this.characters = response.data.results
      this.charOffset += 4;
      this.charLoadBtn = true;
    })
  }

  loadChar() {
    this._getContentService.characterBySeries(this.id, this.limit, this.charOffset).subscribe((response) => {
      this.characters = this.characters.concat(response.data.results)
      this.charOffset += 4;
    })
  }

  getComics(id: number, offset: number) {
    this._getContentService.comicBySeries(id, this.limit, offset).subscribe((response) => {
      this.comics = response.data.results
      this.comicOffset += 4;
      this.comicLoadBtn = true;
    })
  }

  loadComic() {
    this._getContentService.comicBySeries(this.id, this.limit, this.comicOffset).subscribe((response) => {
      this.comics = this.comics.concat(response.data.results)
      this.comicOffset += 4;
    })
  }

  getStories(id: number, offset: number) {
    this._getContentService.storiesBySeries(id, this.limit, offset).subscribe((response) => {
      this.stories = response.data.results
      console.log(response);

      this.storyOffset += 4;
      this.storyLoadBtn = true;
    })
  }

  loadStories() {
    this._getContentService.storiesBySeries(this.id, this.limit, this.storyOffset).subscribe((response) => {
      this.stories = this.stories.concat(response.data.results)
      console.log(response);
      this.storyOffset += 4;
    })
  }

  goBack() {
    this._contentFunctionality.goBack()
  }

  gotoComic(id: number) {
    this._contentFunctionality.goComics(id)
  }
  
  gotoSeries(id: number) {
    this._contentFunctionality.goseries(id)
  }

}
