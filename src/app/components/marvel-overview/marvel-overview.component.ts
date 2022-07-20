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
  isCreatorRoute: boolean = false

  loadCharacters: boolean = false
  loadComics: boolean = false
  loadSeries: boolean = false
  loadStories: boolean = false
  loadCreators: boolean = false
  loadEvents: boolean = false

  constructor(private marvelApiService: MarvelApiService, private router: Router, private sharedService: ContentFunctionalityService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.getMarvelDataById()

    switch (this.url) {
      case `/characters/${id}`:
        this.isCharacterRoute = true
        this.getComics()
        this.getSeries()
        this.getStories()
        this.getEvents()
        break;
      case `/comics/${id}`:
        this.isComicsRoute = true
        this.getCharacters()
        this.getStories()
        this.getCreators()
        this.getEvents()
        break;
      case `/events/${id}`:
        this.isEventRoute = true
        this.getCharacters()
        this.getComics()
        this.getSeries()
        this.getStories()
        this.getCreators()
        break;
      case `/series/${id}`:
        this.isSeriesRoute = true
        this.getCharacters()
        this.getComics()
        this.getStories()
        this.getCreators()
        this.getEvents()
        break;
      case `/stories/${id}`:
        this.isStoriesRoute = true
        this.getCharacters()
        this.getComics()
        this.getSeries()
        this.getCreators()
        this.getEvents()
        break;
      case `/creators/${id}`:
        this.isCreatorRoute = true
        this.getComics()
        this.getSeries()
        this.getStories()
        this.getEvents()
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

  getCharacters() {
    this.marvelApiService.marvelData(4, 0, `${this.url}/characters`).subscribe((response) => {
      this.characters = response.data.results
    })
    console.log('Characters called');
  }

  getComics() {
    this.marvelApiService.marvelData(4, 0, `${this.url}/comics`).subscribe((response) => {
      this.comics = response.data.results
    })
    console.log('Comics called');
  }

  getSeries() {
    this.marvelApiService.marvelData(4, 0, `${this.url}/series`).subscribe((response) => {
      this.series = response.data.results
    })
    console.log('Series called');
  }

  getStories() {
    this.marvelApiService.marvelData(4, 0, `${this.url}/stories`).subscribe((response) => {
      this.stories = response.data.results
    })
    console.log('Stories called');
  }

  getCreators() {
    this.marvelApiService.marvelData(4, 0, `${this.url}/creators`).subscribe((response) => {
      this.creators = response.data.results
    })
    console.log('Creators called');
  }

  getEvents() {
    this.marvelApiService.marvelData(4, 0, `${this.url}/events`).subscribe((response) => {
      this.events = response.data.results
    })
    console.log('Events called');
  }

  loadMore() {

  }

  navigateCharacters(card: MarvelDataType) {
    this.router.navigate(['/characters', card.id])
  }

  navigateComics(card: MarvelDataType) {
    this.router.navigate(['/comics', card.id])
  }

  navigateSeries(card: MarvelDataType) {
    this.router.navigate(['/series', card.id])
  }

  navigation($evnt) {

  }
}
