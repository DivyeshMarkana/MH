import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic } from 'src/app/Models/comicsModels/Comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()comics:Comic[]
  @Input()comicLoadBtn:boolean;
  @Input()isOverviewMode:boolean;
  @Output() load = new EventEmitter()


  loadMore(){
    this.load.emit()
  }
}
