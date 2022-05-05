import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { Creator } from '../../Models/creatorModels/Creator';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  creators: Creator[] = []
  fetching: boolean = false;
  loaded:boolean = false;
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
      this.loaded = true;
    })
  }

  loadMore() {
    this.currentOffset += 15;
    this._getContentService.getCreators(this.limit, this.currentOffset).subscribe( (response) => {
      this.creators = this.creators.concat(response.data.results)
    } )
  }
  // getCreators(offset: number) {
  //   this.fetching = true;
  //   this._getContentService.getAllcreator(offset).subscribe((response) => {
  //     this.creators = response.data.results
  //     // console.log(response);
  //     this.currentOffset += 15;
  //     this.fetching = false;
  //     this.loaded = true;
  //   })
  // }

  // loadMore() {
  //   this.currentOffset += 15;
  //   this._getContentService.getAllcreator(this.currentOffset).subscribe( (response) => {
  //     this.creators = this.creators.concat(response.data.results)
  //   } )
  // }
}
