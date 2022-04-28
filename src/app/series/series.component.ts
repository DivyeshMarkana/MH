import { Component, OnInit } from '@angular/core';
import { GetContentService } from '../services/get-content.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  serieses:any[]= []

  fetching:boolean = false;

  constructor(private _getContentService: GetContentService) { }

  ngOnInit(): void {
    this.fetching = true;
    this._getContentService.getAllSeries().subscribe( (response) => {
      this.serieses = response.data.results;
      // console.log(response);
      // console.log(this.serieses );
      this.fetching = false;
      
    } )
  }

}
