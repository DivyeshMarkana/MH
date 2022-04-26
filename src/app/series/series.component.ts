import { Component, OnInit } from '@angular/core';
import { GetContentService } from '../services/get-content.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  serieses:any[]= []

  constructor(private _getContentService: GetContentService) { }

  ngOnInit(): void {
    this._getContentService.getAllSeries().subscribe( (response) => {
      this.serieses = response.data.results;
      console.log(response);
      
    } )
  }

}
