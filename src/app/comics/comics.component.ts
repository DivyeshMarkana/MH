import { Component, OnInit } from '@angular/core';
import { ComicService } from './comics.service';
import { Comic } from './comicsModels/Comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics: Comic[] = []


  constructor(private _comicService: ComicService) { }

  ngOnInit(): void {
    this._comicService.getComics().subscribe((response) => {
      this.comics = response.data.results;
      console.log(response)
    })
    // this._comicService.getComics().subscribe( (response) => console.log(response))
  }

}
