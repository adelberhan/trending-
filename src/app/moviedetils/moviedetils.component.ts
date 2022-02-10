import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovesService } from '../moves.service';
@Component({
  selector: 'app-moviedetils',
  templateUrl: './moviedetils.component.html',
  styleUrls: ['./moviedetils.component.scss']
})
export class MoviedetilsComponent implements OnInit {

  movieId: string = '';
  movieDetail: any;
  imgPrefix:string='https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute: ActivatedRoute, private _MovesService: MovesService) {
    this.movieId = _ActivatedRoute.snapshot.params.movieId;
    this._MovesService.getMovieDetails(this.movieId).subscribe((data) => {

      this.movieDetail=data;
    })

    
  }

  




  ngOnInit(): void {
  }

}
