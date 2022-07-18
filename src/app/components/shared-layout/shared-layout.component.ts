import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/Models/characterModels/Character';
import { Comic } from 'src/app/Models/comicsModels/Comic';
import { Creator } from 'src/app/Models/creatorModels/Creator';
import { Event } from 'src/app/Models/eventModels/Event';
import { series } from 'src/app/Models/seriesModels/series';
import { Story } from 'src/app/Models/storyModel/Story';


type MarvelDataType = Character | Comic | series | Event | Creator | Story

@Component({
  selector: 'app-shared-layout',
  templateUrl: './shared-layout.component.html',
  styleUrls: ['./shared-layout.component.css']
})
export class SharedLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchKey: string = ''

  @Input() marvelData: MarvelDataType[];
  @Input() isOverviewMode: boolean;
  @Input() loadBtn: boolean;
  @Output() load = new EventEmitter()
  @Output() route = new EventEmitter()

  loadMore() {
    this.load.emit()
  }

  navigation(card: MarvelDataType) {
    this.route.emit(card)
  }

}
