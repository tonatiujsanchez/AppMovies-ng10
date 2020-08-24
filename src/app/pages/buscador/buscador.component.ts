import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  texto: string = '';
  resultado: any[] = [];
  cargando: boolean;
  constructor( public _movies: MoviesService,
               public router: Router,
               public activatedRoute: ActivatedRoute ) {

                 this.activatedRoute.params.subscribe(
                   params =>{
                     if( params['texto'] ){
                      this.texto = params['texto'];
                      this.buscarPelicula();
                     }                     
                   }
                 );
               }

  ngOnInit(): void {
  }

  buscarPelicula(){
    if( this.texto === '' ){
      return;
    }

    console.log( this.texto );
    this.cargando = true;
    this._movies.buscarPelicula( this.texto )
      .subscribe(
        (movies) =>{
          this.cargando = false;
        }
      );
  }

  verPelicula( idx ){
    console.log(idx);
    this.router.navigate([ '/pelicula', idx ]);
  }

}
