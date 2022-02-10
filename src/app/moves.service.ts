import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=d84b3134f5317af90c2310a5838276de&page=1`)}

    getMovieDetails(movieId:string):Observable<any>
    {
      return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movieId}}?api_key=d84b3134f5317af90c2310a5838276de&language=en-US`)}
  }

