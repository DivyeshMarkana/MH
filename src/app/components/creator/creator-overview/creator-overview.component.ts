import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/Models/comicsModels/Comic';
import { series } from 'src/app/Models/seriesModels/series';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { Story } from 'src/app/Models/storyModel/Story';
import { Creator } from '../../../Models/creatorModels/Creator';
import { Event } from 'src/app/Models/eventModels/Event';

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
  events: Event[] = [];

  comicLoadBtn: boolean = false;
  seriesLoadBtn: boolean = false;
  storyLoadBtn: boolean = false;
  eventLoadBtn: boolean = false;
  loaded: boolean = false;

  comicOffset: number = 0;
  seriesOffset: number = 0;
  storyOffset: number = 0;
  eventOffset: number = 0;
  limit: number = 4;

  id = this.route.snapshot.params['id'];

  constructor(private _getContentService: MarvelApiService,
    private _contentFunctionality: ContentFunctionalityService
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._getContentService.getCreator(this.id).subscribe((response) => {
      this.creators = response.data.results;
      console.log(response);
      this.getComics(this.id, this.comicOffset)
      this.getSeries(this.id, this.seriesOffset)
      this.getStories(this.id, this.storyOffset)
      this.getEvents(this.id, this.eventOffset)
      this.loaded = true;
    })
  }

  getComics(id: number, offset: number) {
    this._getContentService.comicByCreator(id, this.limit, offset).subscribe((response) => {
      this.comics = response.data.results
      // console.log(response);
      this.comicOffset += 4;
      this.comicLoadBtn = true;
    })
  }

  loadComics() {
    this._getContentService.comicByCreator(this.id, this.limit, this.comicOffset).subscribe((response) => {
      this.comics = this.comics.concat(response.data.results);
      // console.log(response);
      this.comicOffset += 4;

    })
  }

  getSeries(id: number, offset: number) {
    this._getContentService.seriesByCreator(id, this.limit, offset).subscribe((response) => {
      this.seriess = response.data.results
      // console.log(response);
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
      // console.log(response);
      this.storyOffset += 4;
      this.storyLoadBtn = true;
    })
  }

  loadStories() {
    this._getContentService.storyByCreator(this.id, this.limit, this.storyOffset).subscribe((response) => {
      this.stories = this.stories.concat(response.data.results);
      // console.log(response);
      this.storyOffset += 4;
    })
  }

  getEvents(id: number, offset: number){
    this._getContentService.eventByCreator(id, this.limit, offset).subscribe( (response) => {
      this.events = response.data.results
      this.eventOffset += 4
      this.eventLoadBtn = true
    } )
  }

  loadEvents(){
    this._getContentService.eventByCreator(this.id, this.limit, this.eventOffset).subscribe( (response) => {
      this.events = this.events.concat(response.data.results)
      this.eventOffset += 4
    } )
  }

  goBack() {
    this._contentFunctionality.goBack();
  }

}
