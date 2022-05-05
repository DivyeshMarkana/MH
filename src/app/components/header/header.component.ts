import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @ViewChild(CharactersComponent) public child: CharactersComponent

  // searchTerm:string = ''

  selected: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
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
