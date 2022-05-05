import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';
import { series } from '../Models/seriesModels/series';

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
  SeriesOffset: number = 0;
  limit: number = 15;

  constructor(private _getContentService: MarvelApiService) { }

  ngOnInit(): void {
    this.getSeries(this.SeriesOffset)
  }

  searchSeries() {
    this.serieses = this.dataSeries.filter((search) => {
      return search.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    });
  }

  // getSeries(offset: number) {
  //   this.fetching = true;
  //   this._getContentService.getAllSeries(offset).subscribe((response) => {
  //     this.serieses = response.data.results;
  //     this.dataSeries = response.data.results;
  //     // console.log(response);
  //     this.currentOffset += 150;
  //     this.fetching = false;
  //     this.loaded = true;
  //   })
  // }

  // loadMore() {
  //   this.currentOffset += 150;
  //   this._getContentService.getAllSeries(this.currentOffset).subscribe((response) => {
  //     this.serieses = this.serieses.concat(response.data.results)
  //   })
  // }


  getSeries(offset: number) {
    this.fetching = true;
    this._getContentService.getSeries(this.limit, offset).subscribe((response) => {
      this.serieses = response.data.results;
      this.dataSeries = response.data.results;
      // console.log(response);
      this.SeriesOffset += 15;
      this.fetching = false;
      this.loaded = true;
    })
  }

  loadMore() {
    this.SeriesOffset += 15;
    this._getContentService.getAllSeries(this.SeriesOffset).subscribe((response) => {
      this.serieses = this.serieses.concat(response.data.results)
    })
  }



}
