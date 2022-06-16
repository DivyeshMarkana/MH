import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-api.service';
import { Story } from '../../Models/storyModel/Story';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: Story[] = []
  fetching: boolean = false;
  storyLoadBtn: boolean = false;
  currentOffset: number = 0;
  limit: number = 15;
  subscription: Subscription

  constructor(private _getContentService: MarvelApiService) { }

  ngOnInit(): void {
    this.getStories(this.currentOffset)
  }

  getStories(offset: number) {
    this.fetching = true;
    this._getContentService.getStories(this.limit, offset).subscribe((response) => {
      this.stories = response.data.results
      this.currentOffset += 15;
      this.fetching = false;
      this.storyLoadBtn = true;
    })
  }

  loadMore() {
    this.currentOffset += 15;
    this._getContentService.getStories(this.limit, this.currentOffset).subscribe((response) => {
      this.stories = this.stories.concat(response.data.results);
    })
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
  }
}
