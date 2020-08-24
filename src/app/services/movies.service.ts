import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlMovieDB: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '369190b3710d58cff5bfa8c5ead757fd';
  
  peliculasBuscadas:any[] = [];
  constructor( private http: HttpClient ) { }


  getRecientes(){
    
    let desde = new Date();
    let hasta = new Date();
    
    hasta.setDate( hasta.getDate() );
    desde.setDate( desde.getDate() + 7);

    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${ desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear() }-0${ hasta.getMonth() + 1 }-${ hasta.getDate() }`;
    
    console.log( 'Desde:', desdeStr );
    console.log( 'Hasta:', hastaStr );
    
    

    let url = `${this.urlMovieDB}/discover/movie?primary_release_date.gte=2020-07-01&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es&include_image_language=es`;
    return this.http.get(url).pipe(
      map(
        resp =>{
          return resp['results']
        }
      )
    )
  }
  getPopulares(){
    let url = `${this.urlMovieDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&include_image_language=es`;
    return this.http.get(url).pipe(
      map(
        resp =>{
          return resp['results']
        }
      )
    )
  }
  getKids(){
    let url = `${this.urlMovieDB}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&include_image_language=es`;
    return this.http.get(url).pipe(
      map(
        resp =>{
          return resp['results']
        }
      )
    )
  }
  
  buscarPelicula( texto ){
    let url = `${this.urlMovieDB}/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&include_image_language=es`;
    return this.http.get(url).pipe(
      map(
        resp =>{
          this.peliculasBuscadas = resp['results'];
          return resp['results']
        }
      )
    )
  }

  detallesPelicula( movieId ){
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

    let url = `${this.urlMovieDB}/movie/${movieId}?api_key=${this.apiKey}&language=es`;
    return this.http.get(url);
  }

  creditosPelicula( movieId ){
    // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>

    let url = `${this.urlMovieDB}/movie/${movieId}/credits?api_key=${this.apiKey}&language=es&include_image_language=es`;
    return this.http.get(url).pipe(
      map(
        resp =>{
          return resp['cast']
        }
      )
    )
  }

}
