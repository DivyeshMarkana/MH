import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../characters/characterModels/Character';
import { ComicsComponent } from '../comics/comics.component';
import { Comic } from '../comics/comicsModels/Comic';
import { ContentFunctionalityService } from '../services/content-functionality.service';
import { GetContentService } from '../services/get-content.service';
import { Story } from '../stories/storyModel/Story';

@Component({
  selector: 'app-comic-overview',
  templateUrl: './comic-overview.component.html',
  styleUrls: ['./comic-overview.component.css']
})
export class ComicOverviewComponent implements OnInit {

  comics: Comic[];

  comicCharacters: Character[] = [];

  stories: Story[] = []


  // @ViewChild(ComicsComponent) comic: ComicsComponent

  constructor(private route: ActivatedRoute,
    private _getContentService: GetContentService,
    private _contentFunctionality: ContentFunctionalityService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']

    this.getComicById(id)
    this.getComicCharacter(id)
    this.getStoriesById(id)
  }

  getComicById(id) {
    this._getContentService.getComicsById(id).subscribe((response) => {
      // console.log(response);
      this.comics = response.data.results;
    })
  }


  getComicCharacter(id) {
    this._getContentService.getCharacterByComic(id).subscribe((response) => {
      this.comicCharacters = response.data.results;
      // console.log(response);

    })
  }

  gotoComic(id) {
    this._contentFunctionality.goComics(id)
  }

  gotoSeries(id) {
    this._contentFunctionality.goseries(id)
  }

  getStoriesById(id) {
    this._getContentService.getStoriesByComic(id).subscribe((response) => {
      console.log(response);
      this.stories = response.data.results
    })
  }


}
