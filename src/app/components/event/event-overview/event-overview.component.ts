import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Models/eventModels/Event';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.css']
})
export class EventOverviewComponent implements OnInit {


  events: Event[] = []
  constructor(private _contentFunctionality: ContentFunctionalityService,
    private _marvelApiService: MarvelApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.getEvent(id)
  }

  getEvent(id: number) {
    this._marvelApiService.getEvent(id).subscribe((response) => {
      this.events = response.data.results
    })
  }

  goBack() {
    this._contentFunctionality.goBack()
  }

}
