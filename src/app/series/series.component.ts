import { Component, OnInit } from '@angular/core';
import { GetContentService } from '../services/get-content.service';
import { series } from './seriesModels/series';

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
  loaded:boolean = false;
  currentOffset: number = 0;

  constructor(private _getContentService: GetContentService) { }

  ngOnInit(): void {
    this.getSeries(this.currentOffset)
  }

  getSeries(offset: number) {
    this.fetching = true;
    this._getContentService.getAllSeries(offset).subscribe((response) => {
      this.serieses = response.data.results;
      this.dataSeries = response.data.results;
      // console.log(response);
      this.currentOffset += 150;
      this.fetching = false;
      this.loaded = true;
    })
  }

  loadMore() {
    this.currentOffset += 150;
    this._getContentService.getAllSeries(this.currentOffset).subscribe((response) => {
      this.serieses = this.serieses.concat(response.data.results)
    })
  }

  searchSeries() {
    this.serieses = this.dataSeries.filter((search) => {
      return search.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    });
  }

}
