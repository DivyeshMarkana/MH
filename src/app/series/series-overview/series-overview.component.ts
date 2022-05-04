import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { GetContentService } from 'src/app/services/get-content.service';
import { series } from '../seriesModels/series';

@Component({
  selector: 'app-series-overview',
  templateUrl: './series-overview.component.html',
  styleUrls: ['./series-overview.component.css']
})
export class SeriesOverviewComponent implements OnInit {

  seriess: series[] = []
  loaded: boolean = false;
  fetching: boolean = false

  constructor(private _getContentService: GetContentService,
    private _contentFunctionality: ContentFunctionalityService
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fetching = false;
    this._getContentService.getSeries( undefined, undefined, id).subscribe((response) => {
      this.seriess = response.data.results;
      this.fetching = true;
      this.loaded = true;
    })
  }

  goBack() {
    this._contentFunctionality.goBack()
  }

}
