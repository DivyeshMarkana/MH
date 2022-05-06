import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/Models/eventModels/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()events: Event[]
  @Input()eventLoadBtn: boolean
  @Input()isOverviewMode: boolean
  @Output() load = new EventEmitter()

  loadMore(){
    this.load.emit()
  }
}
