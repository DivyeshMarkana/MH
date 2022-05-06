import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Story } from 'src/app/Models/storyModel/Story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()stories:Story[]
  @Input()isOverviewMode:boolean
  @Input()storyLoadBtn:boolean
  @Output()load = new EventEmitter()


  loadMore(){
    this.load.emit()
  }
}
