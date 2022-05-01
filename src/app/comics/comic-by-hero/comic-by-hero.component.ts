import { Component, Inject, OnInit } from '@angular/core';
import { Comic } from '../comicsModels/Comic';
import { GetContentService } from '../../services/get-content.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comic-by-hero',
  templateUrl: './comic-by-hero.component.html',
  styleUrls: ['./comic-by-hero.component.css']
})
export class ComicByHeroComponent implements OnInit {
  // id: number ;
  comics: Comic[] = []

  fetching:boolean = false;

  constructor(private _getContentService: GetContentService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number}) { }

  ngOnInit(): void {
    this.fetching = true
    // console.log(this.id);
    // console.log(this.data.id);
    // this.id = this.data.id;
    
    this._getContentService.getComicsByHeroName(this.data.id).subscribe( (response) => {
      this.comics = response.data.results
      // console.log(response);
      this.fetching = false
    } )
    
  }
}
