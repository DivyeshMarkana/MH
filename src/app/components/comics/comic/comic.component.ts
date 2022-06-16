import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic } from 'src/app/Models/comicsModels/Comic';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit{

  searchKey:string = ''

  constructor(private _cf: ContentFunctionalityService) { }

  ngOnInit(): void {
    this._cf.search.subscribe( (value) => {
      this.searchKey = value
    } )
  }
  @Input()comics:Comic[]
  @Input()comicLoadBtn:boolean;
  @Input()isOverviewMode:boolean;
  @Output() load = new EventEmitter()


  loadMore(){
    this.load.emit()
  }
}
