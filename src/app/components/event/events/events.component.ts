import { Component, OnDestroy, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { Event } from 'src/app/Models/eventModels/Event';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {

  events: Event[] = []
  limit: number = 15
  eventOffset: number = 0
  eventLoadBtn: boolean = false
  fetching: boolean = false
  subscription: Subscription

  constructor(private _marvelApiService: MarvelApiService) { }



  ngOnInit(): void {
    this.getEvents(this.eventOffset)
  }

  getEvents(offset: number) {
    this.fetching = true;
    this.subscription = this._marvelApiService.getEvents(this.limit, offset).subscribe((response) => {
      this.events = response.data.results
      this.eventOffset += 15
      this.eventLoadBtn = true
      this.fetching = false;
    })
  }

  loadMore() {
    this._marvelApiService.getEvents(this.limit, this.eventOffset).subscribe((response) => {
      this.events = this.events.concat(response.data.results)
      this.eventOffset += 15
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
