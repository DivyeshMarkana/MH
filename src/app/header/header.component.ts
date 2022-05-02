import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersComponent } from '../characters/characters.component';
import { Creator } from '../creator/creator/creatorModel/CreatorDataContainer';
import { GetContentService } from '../services/get-content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @ViewChild(CharactersComponent) public child: CharactersComponent

  // searchTerm:string = ''

  creators: Creator[] = []

  selected:string = ''

  constructor(private _getContentService: GetContentService,
    private router: Router) { }

  ngOnInit(): void {

    this._getContentService.getAllcreator().subscribe((response) => {
      this.creators = response.data.results
    })
  }

  selectChange(event: any) {

this.router.navigate(['/Creator', event.target.value])
  //  alert(event.target.value) 
  }

  // searchCharacter(){
  //   this.child.searchCharacter()
  // }

  // ngAfterViewInit(): void {
  //  this.searchTerm = this.child.searchTerm
  //  this.searchCharacter()
  // }
}
