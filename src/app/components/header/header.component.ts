import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selected: string = ''

  searchTerm:string = ''

  constructor(private router: Router,
    private _cf: ContentFunctionalityService) { }

  ngOnInit(): void {
  }

  selectChange(event: any) {
    this.router.navigate(['/Creator', event.target.value])
  }

  search(event: any){
    this.searchTerm = event.target.value
    // console.log(this.searchTerm);
    this._cf.search.next(this.searchTerm)
    
  }
}
