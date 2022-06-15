import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Creator } from 'src/app/Models/creatorModels/Creator';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit, OnDestroy {

  searchKey: string = ''
  subscription: Subscription

  constructor(private _cf: ContentFunctionalityService) { }

  ngOnInit(): void {
    this._cf.search.subscribe((value) => {
      console.log(value);
      this.searchKey = value
    })
  }

  @Input() creators: Creator[]
  @Input() isOverviewMode: boolean
  @Input() creatorLoadBtn: boolean
  @Output() load = new EventEmitter()


  loadMore() {
    this.load.emit()
  }

  ngOnDestroy(): void {
    this, this.subscription.unsubscribe()
  }

}
