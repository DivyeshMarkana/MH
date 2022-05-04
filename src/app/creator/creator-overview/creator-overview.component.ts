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
  loaded:boolean = false;
  currentOffset:number = 0

  id = this.route.snapshot.params['id'];

  constructor(private _getContentService: GetContentService,
    private _contentFunctionality: ContentFunctionalityService
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._getContentService.getCreators(undefined, undefined, this.id).subscribe((response) => {
      this.creators = response.data.results;
      // console.log(response);
      this.getComics(this.id)
      this.getSeries(this.id)
      this.getStories(this.id)
      this.loaded = true

    })
  }

  getComics(id: number) {
    this._getContentService.getComicByCreator(id).subscribe((response) => {
      this.comics = response.data.results
    })
  }

  getSeries(id: number) {
    this._getContentService.getSeriesByCreator(id).subscribe((response) => {
      this.seriess = response.data.results
    })
  }

  getStories(id: number) {
    this._getContentService.getStoriesByCreator(id).subscribe((response) => {
      this.stories = response.data.results
    })
  }

  goBack() {
    this._contentFunctionality.goBack();
  }

}
