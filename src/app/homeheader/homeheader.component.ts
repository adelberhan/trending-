import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovesService } from '../moves.service';


@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent implements OnInit {
  imgPrifex: string = 'https://image.tmdb.org/t/p/w500';

@Input() trendingMovies: any[] = [];


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 5,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 9
      }
    },
    nav: true
  }


  constructor( private _MovesService: MovesService) {
    
  }

  ngOnInit(): void {
 
  }
  

}
