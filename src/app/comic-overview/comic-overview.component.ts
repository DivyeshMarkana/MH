import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicsComponent } from '../comics/comics.component';
import { Comic } from '../comics/comicsModels/Comic';
import { GetContentService } from '../services/get-content.service';

@Component({
  selector: 'app-comic-overview',
  templateUrl: './comic-overview.component.html',
  styleUrls: ['./comic-overview.component.css']
})
export class ComicOverviewComponent implements OnInit, AfterViewInit {

  comics: Comic[];

  // @ViewChild(ComicsComponent) comic: ComicsComponent

  constructor(private route: ActivatedRoute,
    private _getContentService: GetContentService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']

   this.getComicById(id)
  }

  getComicById(id) {
    this._getContentService.getComicsById(id).subscribe((response) => {
      console.log(response);
      this.comics = response.data.results;
    })
  }
  
  ngAfterViewInit(): void {
    // this.comic.showComic()
  }

}
