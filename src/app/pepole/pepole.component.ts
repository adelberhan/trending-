import { Component, OnInit } from '@angular/core';
import { MovesService } from '../moves.service';

@Component({
  selector: 'app-pepole',
  templateUrl: './pepole.component.html',
  styleUrls: ['./pepole.component.scss']
})
export class PepoleComponent implements OnInit {
  trendingpoepole: any[] = [];
  imgPrifex:string='https://image.tmdb.org/t/p/w500';

  constructor(private _MovesService: MovesService) { }

  ngOnInit(): void {
    this._MovesService.getTrending('person').subscribe((data) => {
      this.trendingpoepole = data.results.slice(0-20);
    })
  }

}
