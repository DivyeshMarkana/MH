import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/Models/eventModels/Event';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnDestroy {

  searchKey:string = ''
  subscription: Subscription

  constructor(private _cf: ContentFunctionalityService) { }

  ngOnInit(): void {
    this._cf.search.subscribe( (value) => {
      console.log(value);
      this.searchKey = value
    } )
  }

  @Input()events: Event[]
  @Input()eventLoadBtn: boolean
  @Input()isOverviewMode: boolean
  @Output() load = new EventEmitter()

  loadMore(){
    this.load.emit()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
