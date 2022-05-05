import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { series } from 'src/app/Models/seriesModels/series';

@Component({
  selector: 'app-seriees',
  templateUrl: './seriees.component.html',
  styleUrls: ['./seriees.component.css']
})
export class SerieesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() seriess: series[]
  @Input() isOverviewMode: boolean
  @Input() seriesLoadBtn: boolean
  @Output() load = new EventEmitter()

  loadMore() {
    this.load.emit()
  }
}
