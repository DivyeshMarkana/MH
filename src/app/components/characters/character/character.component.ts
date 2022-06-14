import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/Models/characterModels/Character';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {

  searchKey:string = ''
  subscription: Subscription

  constructor(private _cf: ContentFunctionalityService) { }

  ngOnInit(): void {
  this.subscription =  this._cf.search.subscribe( (value) => {
      // console.log(value);
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
