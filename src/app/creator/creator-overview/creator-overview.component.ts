import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicList } from 'src/app/characters/characterModels/ComicList';
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

  constructor(private _getContentService: GetContentService,
    private _contentFunctionality: ContentFunctionalityService
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this._getContentService.getCreatorById(id).subscribe((response) => {
      this.creators = response.data.results;
      console.log(response);
      this.getComics(id)
      this.getSeries(id)
      this.getStories(id)
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
