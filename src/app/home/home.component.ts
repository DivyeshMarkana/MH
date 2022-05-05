import { Component, OnInit } from '@angular/core';
import { Character } from '../Models/characterModels/Character';
import { Comic } from '../Models/comicsModels/Comic';
import { series } from '../Models/seriesModels/series';
import { MarvelApiService } from '../services/marvel-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: Character[] = [];
  comics: Comic[] = [];
  seriess:series[] = [];
  loaded: boolean = false;
  limit: number = 4;
  offset:number = 603

  constructor(private _getContentService: MarvelApiService) { }

  ngOnInit(): void {
    this.getCharacter()
    this.getComics()
    this.loaded = true
    this.getSeries()
  }

  getCharacter() {
    this._getContentService.getCharacters(this.limit, this.offset).subscribe((response) => {
      this.characters = response.data.results
    })
  }

  getComics() {
    this._getContentService.comicForHome().subscribe((response) => {
      this.comics = response.data.results
    })
  }

  getSeries() {
    this._getContentService.seriesForHome().subscribe((response) => {
      this.seriess = response.data.results
      console.log(response);
      
    })
  }
  

  // selectedIndex: number = 0;
  // indicators: boolean = true;
  // controls: boolean = true;
  // images = [
  //   {
  //     imgSrc: "../../assets/theme1.jpg",
  //   },
  //   {
  //     imgSrc: "../../assets/theme2.jpg",
  //   },
  //   {
  //     imgSrc: "../../assets/theme3.jpg",
  //   },
  // ]

  // selectImage(index: number) {
  //   this.selectedIndex = index
  // }

  // onPrevClick(): void {
  //   if (this.selectedIndex === 0) {
  //     this.selectedIndex = this.images.length - 1
  //   }
  //   this.selectedIndex--
  // }
  // onNextClick(): void {
  //   if (this.selectedIndex === 0) {
  //     this.selectedIndex = 0
  //   }
  //   this.selectedIndex++
  // }

  // recommanded = [
  //   {
  //     src: '../../assets/movies/movie1.jpg',
  //     title: 'Thor rangnarok'
  //   },
  //   {
  //     src: '../../assets/movies/movie2.jpg',
  //     title: 'Spiderman 3'
  //   },
  //   {
  //     src: '../../assets/movies/movie4.jpg',
  //     title: 'Iron man 3'
  //   },
  //   {
  //     src: '../../assets/movies/movie5.jpg',
  //     title: 'Venom'
  //   },
  // ]

  // upcomings = [
  //   {
  //     src: '../../assets/Upcoming/upcoming1.png',
  //     title: 'Doctor Strange'
  //   },
  //   {
  //     src: '../../assets/Upcoming/upcoming5.jpg',
  //     title: 'Deadpool 3'
  //   },
  //   {
  //     src: '../../assets/Upcoming/upcoming3.jpeg',
  //     title: 'The Flash'
  //   },
  //   {
  //     src: '../../assets/Upcoming/upcoming4.jpg',
  //     title: 'Wakanda Forever'
  //   },
  // ]

}
