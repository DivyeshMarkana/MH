import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/Models/characterModels/Character';
import { Comic } from 'src/app/Models/comicsModels/Comic';
import { Creator } from 'src/app/Models/creatorModels/Creator';
import { series } from 'src/app/Models/seriesModels/series';
import { Story } from 'src/app/Models/storyModel/Story';
import { Event } from 'src/app/Models/eventModels/Event';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';

type MarvelDataType = Character | Comic | series | Event | Creator | Story

@Component({
  selector: 'app-marvel-overview',
  templateUrl: './marvel-overview.component.html',
  styleUrls: ['./marvel-overview.component.css']
})
export class MarvelOverviewComponent implements OnInit {

  marvelDataById: any[] = []
  characters: any[] = []
  comics: any[] = []
  series: any[] = []
  stories: any[] = []
  creators: any[] = []
  events: any[] = []

  url: string = this.router.url

  isCharacterRoute: boolean = false
  isComicsRoute: boolean = false
  isSeriesRoute: boolean = false
  isStoriesRoute: boolean = false
  isEventRoute: boolean = false
  isOverviewMode: boolean = false
  isCreatorRoute: boolean = false

  constructor(private marvelApiService: MarvelApiService, private router: Router, private sharedService: ContentFunctionalityService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.getMarvelDataById()

    switch (this.url) {
      case `/characters/${id}`:
        this.isCharacterRoute = true
        break;
      case `/comics/${id}`:
        this.isComicsRoute = true
        break;
      case `/events/${id}`:
        this.isEventRoute = true
        break;
      case `/series/${id}`:
        this.isSeriesRoute = true
        break;
      case `/stories/${id}`:
        this.isStoriesRoute = true
        break;
      case `/creators/${id}`:
        this.isCreatorRoute = true
        break;

      default:
        break;
    }
  }

  getMarvelDataById() {
    this.marvelApiService.marvelDataById(this.url).subscribe(response => {
      this.marvelDataById = response.data.results
    })
  }

  goBack() {
    this.sharedService.goBack()
  }
}
