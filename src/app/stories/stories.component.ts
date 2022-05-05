import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';
import { Story } from '../Models/storyModel/Story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: Story[] = []
  fetching: boolean = false;
  loaded: boolean = false;
  currentOffset: number = 0;
  limit:number = 15;
  constructor(private _getContentService: MarvelApiService) { }

  ngOnInit(): void {
    this.getStories(this.currentOffset)
  }

  getStories(offset: number) {
    this.fetching = true;
    this._getContentService.getStories(this.limit, offset).subscribe((response) => {
      this.stories = response.data.results
      // console.log(response);
      this.currentOffset += 15;
      this.fetching = false;
      this.loaded = true;
    })
  }

  loadMore() {
    this.currentOffset += 15;
    this._getContentService.getAllStories(this.currentOffset).subscribe((response) => {
      this.stories = this.stories.concat(response.data.results);
    })
  }
  // getStories(offset: number) {
  //   this.fetching = true;
  //   this._getContentService.getAllStories(offset).subscribe((response) => {
  //     this.stories = response.data.results
  //     // console.log(response);
  //     this.currentOffset += 15;
  //     this.fetching = false;
  //     this.loaded = true;
  //   })
  // }

  // loadMore() {
  //   this.currentOffset += 15;
  //   this._getContentService.getAllStories(this.currentOffset).subscribe((response) => {
  //     this.stories = this.stories.concat(response.data.results);
  //   })
  // }
}
