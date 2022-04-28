import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CharactersComponent } from '../characters/characters.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

// @ViewChild(CharactersComponent) public child: CharactersComponent

// searchTerm:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  // searchCharacter(){
  //   this.child.searchCharacter()
  // }

  // ngAfterViewInit(): void {
  //  this.searchTerm = this.child.searchTerm

  //  this.searchCharacter()

   
  // }
}
