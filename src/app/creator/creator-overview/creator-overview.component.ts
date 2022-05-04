import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/comics/comicsModels/Comic';
import { series } from 'src/app/series/seriesModels/series';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { GetContentService } from 'src/app/services/get-content.service';
import { Story } from 'src/app/stories/storyModel/Story';
import { Creator } from '../creator/creatorModel/CreatorDataContainer';

@Component({
  selector: 'app-creator-overview',
  templateUrl: './creator-overview.component.html',
  styleUrls: ['./creator-overview.component.css']
})
export class CreatorOverviewComponent implements OnInit {

  creators: Creator[] = [];
  comics: Comic[] = [];
  seriess: series[] = [];
  stories: Story[] = [];
  comicLoadBtn:boolean = false;
  seriesLoadBtn:boolean = false;
  storyLoadBtn:boolean = false;
  loaded: boolean = false;
  comicOffset: number = 0;
  seriesOffset: number = 0;
  storyOffset: number = 0;
  limit: number = 4;
  id = this.route.snapshot.params['id'];

  constructor(private _getContentService: GetContentService,
    private _contentFunctionality: ContentFunctionalityService
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._getContentService.getCreators(undefined, undefined, this.id).subscribe((response) => {
      this.creators = response.data.results;
      // console.log(response);
      this.getComics(this.id, this.comicOffset)
      this.getSeries(this.id, this.seriesOffset)
      this.getStories(this.id, this.storyOffset)
      this.loaded = true;
    })
  }

  getComics(id: number, offset: number) {
    this._getContentService.comicByCreator(id, this.limit, offset).subscribe((response) => {
      this.comics = response.data.results
      console.log(response);
      this.comicOffset += 4;
      this.comicLoadBtn = true;
    })
  }

  loadComics() {
    this._getContentService.comicByCreator(this.id, this.limit, this.comicOffset).subscribe((response) => {
      this.comics = this.comics.concat(response.data.results);
      console.log(response);
      this.comicOffset += 4;
      
    })
  }

  getSeries(id: number, offset: number) {
    this._getContentService.seriesByCreator(id, this.limit, offset).subscribe((response) => {
      this.seriess = response.data.results
      console.log(response);
      this.seriesOffset += 4;
      this.seriesLoadBtn = true;
    })
  }

  loadSeries() {
    this._getContentService.seriesByCreator(this.id, this.limit, this.seriesOffset).subscribe((response) => {
      this.seriess = this.seriess.concat(response.data.results);
      console.log(response);
      this.seriesOffset += 4;
      
    })
  }

  getStories(id: number, offset: number) {
    this._getContentService.storyByCreator(id, this.limit, offset).subscribe((response) => {
      this.stories = response.data.results
      console.log(response);
      this.storyOffset += 4;
      this.storyLoadBtn = true;
    })
  }

  loadStories() {
    this._getContentService.storyByCreator(this.id, this.limit, this.storyOffset).subscribe((response) => {
      this.stories = this.stories.concat(response.data.results);
      console.log(response);
      this.storyOffset += 4;
    })
  }


  // getComics(id: number) {
  //   this._getContentService.getComicByCreator(id).subscribe((response) => {
  //     this.comics = response.data.results
  //   })
  // }

  // getSeries(id: number) {
  //   this._getContentService.getSeriesByCreator(id).subscribe((response) => {
  //     this.seriess = response.data.results
  //   })
  // }

  // getStories(id: number) {
  //   this._getContentService.getStoriesByCreator(id).subscribe((response) => {
  //     this.stories = response.data.results
  //   })
  // }

  goBack() {
    this._contentFunctionality.goBack();
  }

}
