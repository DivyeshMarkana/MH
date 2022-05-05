import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { Story } from '../../Models/storyModel/Story';

@Component({
  selector: 'app-story-overview',
  templateUrl: './story-overview.component.html',
  styleUrls: ['./story-overview.component.css']
})
export class StoryOverviewComponent implements OnInit {

  stories: Story[] = []

  constructor(private _getContentService: MarvelApiService,
    private _contentFunctionality: ContentFunctionalityService
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this._getContentService.getStory(id).subscribe((response) => {
      this.stories = response.data.results;
      console.log(response);
    })
  }

  goBack(){
    this._contentFunctionality.goBack()
  }
}
