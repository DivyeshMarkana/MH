import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/Models/characterModels/Character';
import { Comic } from 'src/app/Models/comicsModels/Comic';
import { Creator } from 'src/app/Models/creatorModels/Creator';
import { series } from 'src/app/Models/seriesModels/series';
import { Story } from 'src/app/Models/storyModel/Story';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { Event } from '../../Models/eventModels/Event'

type MarvelDataType = Character | Comic | series | Event | Creator | Story

@Component({
  selector: 'app-marvel-data-placeholder',
  templateUrl: './marvel-data-placeholder.component.html',
  styleUrls: ['./marvel-data-placeholder.component.css']
})
export class MarvelDataPlaceholderComponent implements OnInit {

  currentURL = this.router.url
  marvelData: MarvelDataType[] = []

  loadBtn: boolean = false
  isOverviewMode: boolean = false
  fetching: boolean = false

  currentOffset: number = 0

  constructor(private marvelApiService: MarvelApiService, private router: Router) { }

  ngOnInit(): void {
    this.getMarvelData()
  }

  getMarvelData() {
    this.marvelApiService.marvelData(15, 0, this.currentURL).subscribe((response) => {
      console.log(response);
      this.marvelData = response.data.results
    })
  }

  loadMore() {
    this.marvelApiService.marvelData(15, this.currentOffset, this.currentURL).subscribe(response => {
      this.marvelData = this.marvelData.concat(response.data.results)
      this.currentOffset += 15
    })
  }

  navigation(event: any) {
    this.router.navigate([this.currentURL, event.id])
  }

}
