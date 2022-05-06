import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { Creator } from '../../../Models/creatorModels/Creator';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  creators: Creator[] = []
  fetching: boolean = false;
  creatorLoadBtn:boolean = false;
  currentOffset: number = 0;
  limit: number = 15;

  constructor(private _getContentService: MarvelApiService) { }

  ngOnInit(): void {
    this.getCreators(this.currentOffset)
  }

  getCreators(offset: number) {
    this.fetching = true;
    this._getContentService.getCreators( this.limit, offset).subscribe((response) => {
      this.creators = response.data.results
      // console.log(response);
      this.currentOffset += 15;
      this.fetching = false;
      this.creatorLoadBtn = true;
    })
  }

  loadMore() {
    this.currentOffset += 15;
    this._getContentService.getCreators(this.limit, this.currentOffset).subscribe( (response) => {
      this.creators = this.creators.concat(response.data.results)
    } )
  }
}
