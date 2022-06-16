import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-api.service';
import { series } from '../../Models/seriesModels/series';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  serieses: series[] = [];
  dataSeries: series[] = []
  searchTerm: string = '';
  fetching: boolean = false;
  seriesLoadBtn:boolean = false;
  SeriesOffset: number = 0;
  limit: number = 15;
  subscription: Subscription

  constructor(private _getContentService: MarvelApiService) { }

  ngOnInit(): void {
    this.getSeries(this.SeriesOffset)
  }

  getSeries(offset: number) {
    this.fetching = true;
   this.subscription = this._getContentService.getSeries(this.limit, offset).subscribe((response) => {
      this.serieses = response.data.results;
      this.dataSeries = response.data.results;
      this.SeriesOffset += 15;
      this.fetching = false;
      this.seriesLoadBtn = true;
    })
  }

  loadMore() {
    this._getContentService.getSeries(this.limit, this.SeriesOffset).subscribe((response) => {
      this.serieses = this.serieses.concat(response.data.results)
      this.SeriesOffset += 15;
    })
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
