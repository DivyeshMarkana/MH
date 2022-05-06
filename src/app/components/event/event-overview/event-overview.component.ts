import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/Models/characterModels/Character';
import { Comic } from 'src/app/Models/comicsModels/Comic';
import { Event } from 'src/app/Models/eventModels/Event';
import { series } from 'src/app/Models/seriesModels/series';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.css']
})
export class EventOverviewComponent implements OnInit {

  events: Event[] = []
  characters: Character[] = []
  comics: Comic[] = []
  seriess:series[] = []

  limit: number = 4
  characterOffset: number = 0
  comicOffset:number = 0
  seriesOffset:number = 0

  characterLoadBtn: boolean
  comicLoadBtn: boolean
  seriesLoadBtn: boolean

  id = this.route.snapshot.params['id']

  constructor(private _contentFunctionality: ContentFunctionalityService,
    private _marvelApiService: MarvelApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEvent(this.id)
    this.getCharacter(this.id, this.characterOffset)
    this.getComics(this.id, this.comicOffset)
    this.getSeries(this.id, this.seriesOffset)
  }

  getEvent(id: number) {
    this._marvelApiService.getEvent(id).subscribe((response) => {
      this.events = response.data.results
    })
  }

  getCharacter(id: number, offset: number) {
    this._marvelApiService.characterByEvent(id, this.limit, offset).subscribe( (response) => {
      this.characters = response.data.results
      this.characterOffset += 4
      this.characterLoadBtn = true
    } )
  }

  loadCharacter() {
    this._marvelApiService.characterByEvent(this.id, this.limit, this.characterOffset).subscribe( (response) => {
      this.characters = this.characters.concat(response.data.results)
      this.characterOffset += 4
    } )
  }

  getComics(id: number, offset: number) {
    this._marvelApiService.comicByEvent(id, this.limit, offset).subscribe( (response) => {
      this.comics = response.data.results
      this.comicOffset += 4
      this.comicLoadBtn = true
    } )
  }

  loadComics() {
    this._marvelApiService.comicByEvent(this.id, this.limit, this.comicOffset).subscribe( (response) => {
      this.comics = this.comics.concat(response.data.results)
      this.comicOffset += 4
    } )
  }

  getSeries(id: number, offset: number) {
    this._marvelApiService.seriesByEvent(id, this.limit, offset).subscribe( (response) => {
      this.seriess = response.data.results
      this.seriesOffset += 4
      this.seriesLoadBtn = true
    } )
  }

  loadSeries(){
    this._marvelApiService.seriesByEvent(this.id, this.limit, this.seriesOffset).subscribe( (response) => {
      this.seriess = this.seriess.concat(response.data.results)
      this.seriesOffset += 4
    } )
  }

  goBack() {
    this._contentFunctionality.goBack()
  }
}
