import { Component, OnInit } from '@angular/core';
import { MovesService } from '../moves.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trendingMovies: any[] = [];
  imgPrifex: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MovesService: MovesService) {

  }

  ngOnInit(): void {
    this._MovesService.getTrending('movie').subscribe((data) => {
      this.trendingMovies = data.results.slice(0-25);
    })

  }
}
