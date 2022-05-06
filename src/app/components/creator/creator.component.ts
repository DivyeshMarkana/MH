import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Creator } from 'src/app/Models/creatorModels/Creator';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Input()creators:Creator[]
@Input()isOverviewMode:boolean
@Input()creatorLoadBtn:boolean
@Output()load = new EventEmitter()


loadMore(){
this.load.emit()
}

}
