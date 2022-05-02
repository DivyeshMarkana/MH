import { Component, OnInit } from '@angular/core';
import { GetContentService } from '../services/get-content.service';
import { Story } from './storyModel/Story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {


  stories: Story[] = []
  fetching:boolean = false
  constructor(private _getContentService: GetContentService) { }

  ngOnInit(): void {
this.fetching = false;
    this._getContentService.getAllStories().subscribe((response) => {
      this.stories = response.data.results
      console.log(response);
      this.fetching = true;
      
    })
  }

}
