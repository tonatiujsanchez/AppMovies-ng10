import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  idMovie: number;
  pagina:string;

  pelicula: any = {};
  actores: any[] = [];

  constructor( private _movie: MoviesService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) { 
                 
    this.activatedRoute.params.subscribe(
      param =>{
        this.idMovie = param.id * 1;
        this.detallePelicula();
        this.creditosPelicula();
        this.pagina = param.pag;      
      }
    );

  }

  ngOnInit(): void {
  }
  
  detallePelicula(){
    this._movie.detallesPelicula( this.idMovie ).subscribe(
      movie =>{
        this.pelicula = movie;
        console.log( movie );
      }
    );
  }
  
  creditosPelicula(){
    this._movie.creditosPelicula( this.idMovie ).subscribe(
      creditos =>{
        this.actores = creditos;
      }
    );
  }

  regresar(){
    this.router.navigate([ '/'+this.pagina ]);
  }

}
