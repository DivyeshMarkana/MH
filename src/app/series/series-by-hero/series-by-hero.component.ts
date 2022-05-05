import { Component, Inject, OnInit } from '@angular/core';
import { series } from '../../Models/seriesModels/series';
import { MarvelApiService } from '../../services/marvel-api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-series-by-hero',
  templateUrl: './series-by-hero.component.html',
  styleUrls: ['./series-by-hero.component.css']
})
export class SeriesByHeroComponent implements OnInit {

  seriess: series[] = []

  constructor(private _getContentService: MarvelApiService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number}) { }

  ngOnInit(): void {

    this._getContentService.getSeriesByHeroName(this.data.id).subscribe( (response) => {
      this.seriess = response.data.results;
    } )
  }

}
