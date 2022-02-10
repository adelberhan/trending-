import { Component, OnInit } from '@angular/core';
import { MovesService } from '../moves.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingpoepole: any[] = [];
imgPrifex:string='https://image.tmdb.org/t/p/w500';

  constructor(private _MovesService: MovesService) {
   
  }

  ngOnInit(): void {
   this._MovesService.getTrending('movie').subscribe((data) => {
      this.trendingMovies = data.results.slice(0-10);
    })
    this._MovesService.getTrending('tv').subscribe((data) => {
      this.trendingTv = data.results.slice(0-10);
    })

    this._MovesService.getTrending('person').subscribe((data) => {
      this.trendingpoepole = data.results.slice(0-10);
    })
  }

}
