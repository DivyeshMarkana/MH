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

  characterOffset: number = 0
  comicOffset: number = 0
  seriesOffset: number = 0
  storyOffset: number = 0
  creatorOffset: number = 0
  eventOffset: number = 0

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
    this.marvelApiService.marvelData(4, this.characterOffset, `${this.url}/characters`).subscribe((response) => {
      this.characters = response.data.results
      this.characterOffset += 4
      this.loadCharacters = true
    })
  }

  loadCharacter() {
    this, this.marvelApiService.marvelData(4, this.characterOffset, `${this.url}/characters`).subscribe(response => {
      this.characters = this.characters.concat(response.data.results)
      this.characterOffset += 4
    })
  }

  getComics() {
    this.marvelApiService.marvelData(4, this.comicOffset, `${this.url}/comics`).subscribe((response) => {
      this.comics = response.data.results
      this.comicOffset += 4
      this.loadComics = true
    })
  }

  loadComic() {
    this, this.marvelApiService.marvelData(4, this.comicOffset, `${this.url}/comics`).subscribe(response => {
      this.comics = this.comics.concat(response.data.results)
      this.comicOffset += 4
    })
  }

  getSeries() {
    this.marvelApiService.marvelData(4, this.seriesOffset, `${this.url}/series`).subscribe((response) => {
      this.series = response.data.results
      this.seriesOffset += 4
      this.loadSeries = true
    })
  }

  loadSeriess() {
    this, this.marvelApiService.marvelData(4, this.seriesOffset, `${this.url}/series`).subscribe(response => {
      this.series = this.series.concat(response.data.results)
      this.seriesOffset += 4
    })
  }

  getStories() {
    this.marvelApiService.marvelData(4, this.storyOffset, `${this.url}/stories`).subscribe((response) => {
      this.stories = response.data.results
      this.storyOffset += 4
      this.loadStories = true
    })
  }

  loadStory() {
    this, this.marvelApiService.marvelData(4, this.storyOffset, `${this.url}/stories`).subscribe(response => {
      this.stories = this.stories.concat(response.data.results)
      this.storyOffset += 4
    })
  }

  getCreators() {
    this.marvelApiService.marvelData(4, this.creatorOffset, `${this.url}/creators`).subscribe((response) => {
      this.creators = response.data.results
      this.creatorOffset += 4
      this.loadCreators = true
    })
  }

  loadCreator() {
    this, this.marvelApiService.marvelData(4, this.creatorOffset, `${this.url}/creators`).subscribe(response => {
      this.creators = this.creators.concat(response.data.results)
      this.creatorOffset += 4
    })
  }

  getEvents() {
    this.marvelApiService.marvelData(4, this.eventOffset, `${this.url}/events`).subscribe((response) => {
      this.events = response.data.results
      this.eventOffset += 4
      this.loadEvents = true
    })
  }

  loadEvent() {
    this, this.marvelApiService.marvelData(4, this.eventOffset, `${this.url}/events`).subscribe(response => {
      this.events = this.events.concat(response.data.results)
      this.eventOffset += 4
    })
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

  navigateStories(card: MarvelDataType) {
    this.router.navigate(['/stories', card.id])
  }

  navigateCreator(card: MarvelDataType) {
    this.router.navigate(['/creators', card.id])
  }

  navigateEvent(card: MarvelDataType) {
    this.router.navigate(['/events', card.id])
  }

}
