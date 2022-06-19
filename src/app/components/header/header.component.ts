import { Component, OnInit } from '@angular/core';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  searchTerm:string = ''

  constructor(private _cf: ContentFunctionalityService) { }

  ngOnInit(): void {
  }

  search(event: any){
    this.searchTerm = event.target.value
    this._cf.search.next(this.searchTerm)
  }
}
