import { Component, OnInit } from '@angular/core';
import { Comic } from '../comics/comicsModels/Comic';
import { GetContentService } from '../services/get-content.service';

@Component({
  selector: 'app-comic-by-hero',
  templateUrl: './comic-by-hero.component.html',
  styleUrls: ['./comic-by-hero.component.css']
})
export class ComicByHeroComponent implements OnInit {
  comics: Comic[] = []

  constructor(private _getContentService: GetContentService) { }

  ngOnInit(): void {
    this._getContentService.getComicsByHeroName().subscribe( (response) => {
      this.comics = response.data.results
      // console.log(response);
      
    } )
  }

}
