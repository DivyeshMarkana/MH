import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { GetContentService } from 'src/app/services/get-content.service';
import { Story } from '../storyModel/Story';

@Component({
  selector: 'app-story-overview',
  templateUrl: './story-overview.component.html',
  styleUrls: ['./story-overview.component.css']
})
export class StoryOverviewComponent implements OnInit {

  stories: Story[] = []

  constructor(private _getContentService: GetContentService,
    private _contentFunctionality: ContentFunctionalityService
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this._getContentService.getStoryById(id).subscribe((response) => {
      this.stories = response.data.results;
      // console.log(response);
      
    })
  }

  goBack(){
    this._contentFunctionality.goBack()
  }

}
