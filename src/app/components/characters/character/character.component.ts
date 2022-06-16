import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/Models/characterModels/Character';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  searchKey:string = ''
  subscription: Subscription

  constructor(private _cf: ContentFunctionalityService) { }

  ngOnInit(): void {
    this._cf.search.subscribe( (value) => {
      this.searchKey = value
    } )
  }

  @Input()characters:Character[] ;
  @Input()isOverviewMode:boolean ;
  @Input()characterLoadBtn:boolean ;
  @Output()loadCharacter = new EventEmitter()

  loadMore(){
    this.loadCharacter.emit()
  }
}
