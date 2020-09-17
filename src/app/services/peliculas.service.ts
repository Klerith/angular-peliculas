import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient ) { }

  getCartelera():Observable<CarteleraResponse> {

    return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=1865f43a0549ca50d341dd9ab8b29f49&language=es-ES&page=1');


  }


}

