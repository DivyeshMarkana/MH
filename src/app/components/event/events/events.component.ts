import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { Event } from 'src/app/Models/eventModels/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = []
  limit: number = 15
  eventOffset: number = 0
  eventLoadBtn: boolean = false

  constructor(private _marvelApiService: MarvelApiService) { }

  ngOnInit(): void {
    this.getEvents(this.eventOffset)
  }

  getEvents(offset: number) {
    this._marvelApiService.getEvents(this.limit, offset).subscribe((response) => {
      this.events = response.data.results
      this.eventOffset += 15
      this.eventLoadBtn = true
    })
  }

  loadMore(){
    this._marvelApiService.getEvents(this.limit, this.eventOffset).subscribe((response) => {
      this.events = this.events.concat(response.data.results)
      this.eventOffset += 15
    })
  }

}
