import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

loaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loaded = true
  }

  recommanded = [
    {
      src: '../../assets/movies/movie1.jpg',
      title: 'Thor rangnarok'
    },
    {
      src: '../../assets/movies/movie2.jpg',
      title: 'Spiderman 3'
    },
    {
      src: '../../assets/movies/movie4.jpg',
      title: 'Iron man 3'
    },
    {
      src: '../../assets/movies/movie5.jpg',
      title: 'Venom'
    },
  ]

  upcomings = [
    {
      src: '../../assets/Upcoming/upcoming1.png',
      title: 'Doctor Strange'
    },
    {
      src: '../../assets/Upcoming/upcoming5.jpg',
      title: 'Deadpool 3'
    },
    {
      src: '../../assets/Upcoming/upcoming3.jpeg',
      title: 'The Flash'
    },
    {
      src: '../../assets/Upcoming/upcoming4.jpg',
      title: 'Wakanda Forever'
    },
  ]

}
