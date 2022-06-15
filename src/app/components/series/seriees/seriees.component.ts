import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { series } from 'src/app/Models/seriesModels/series';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seriees',
  templateUrl: './seriees.component.html',
  styleUrls: ['./seriees.component.css']
})
export class SerieesComponent implements OnInit, OnDestroy {

  searchKey:string = ''
  subscription: Subscription

  constructor(private _cf: ContentFunctionalityService) { }

  ngOnInit(): void {
    this._cf.search.subscribe( (value) => {
      console.log(value);
      this.searchKey = value
    } )
  }

  @Input() seriess: series[]
  @Input() isOverviewMode: boolean
  @Input() seriesLoadBtn: boolean
  @Output() load = new EventEmitter()

  loadMore() {
    this.load.emit()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
