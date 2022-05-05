import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/Models/characterModels/Character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()characters:Character[] ;
  @Input()isOverviewMode:boolean ;
  @Input()characterLoadBtn:boolean ;
  @Output()loadCharacter = new EventEmitter()

  loadMore(){
    this.loadCharacter.emit()
  }

}
