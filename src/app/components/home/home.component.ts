import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelApiService } from '../../services/marvel-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: any[] = [];
  comics: any[] = [];
  series: any[] = [];
  loaded: boolean = false;
  limit: number = 4;
  CharacterOffset: number = 603
  comicOffset: number = 605
  seriesOffset: number = 60
  serieId: number = 1009282

  constructor(private marvelApiService: MarvelApiService, private router: Router) { }

  ngOnInit(): void {
    this.getCharacter()
    this.getComics()
    this.loaded = true
    this.getSeries()
  }

  getCharacter() {
    this.marvelApiService.marvelData(this.limit, this.CharacterOffset, '/characters').subscribe((response) => {
      this.characters = response.data.results
    })
  }

  getComics() {
    this.marvelApiService.marvelData(this.limit, this.comicOffset, '/comics').subscribe((response) => {
      this.comics = response.data.results
    })
  }

  getSeries() {
    this.marvelApiService.marvelData(this.limit, this.seriesOffset, `/characters/${this.serieId}/series`).subscribe((response) => {
      this.series = response.data.results
      console.log(response);

    })
  }

  loadCharacter() {
    this.router.navigate(['/characters'])
  }
  loadComic() {
    this.router.navigate(['/comics'])
  }
  loadSeries() {
    this.router.navigate(['/series'])
  }

  navigateCharacters(card: any) {
    this.router.navigate(['/characters', card.id])
  }

  navigateComics(card: any) {
    this.router.navigate(['/comics', card.id])
  }

  navigateSeries(card: any) {
    this.router.navigate(['/series', card.id])
  }
}
