import { Component, OnInit } from '@angular/core';
import { GetContentService } from '../services/get-content.service';
import { Comic } from './comicsModels/Comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics: Comic[] = []


  constructor(private _getContentService: GetContentService) { }

  ngOnInit(): void {
    this._getContentService.getAllComics().subscribe((response) => {
      this.comics = response.data.results;
      // console.log(response)
    })
  }

}
