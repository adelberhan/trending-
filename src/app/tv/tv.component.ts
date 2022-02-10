import { Component, OnInit } from '@angular/core';
import { MovesService } from '../moves.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  trendingTv: any[] = [];
  imgPrifex: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MovesService: MovesService) { }

  ngOnInit(): void {
    this._MovesService.getTrending('tv').subscribe((data) => {
      this.trendingTv = data.results.slice(0 - 22);
    })

  }
}


