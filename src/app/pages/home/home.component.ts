import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  carusel = [
    {
      img: './assets/img/br-01.jpg',
      desc: 'Arrow'
    },
    {
      img: './assets/img/br-02.jpg',
      desc: 'Pokémon'
    },
    {
      img: './assets/img/br-03.jpg',
      desc: 'Riverdale'
    },
    {
      img: './assets/img/br-04.jpg',
      desc: 'Agentes de S.H.I.E.L.D.'
    }
  ];
  recientes:any = [];
  populares:any = [];
  kids   : any = [];
  constructor( public _movies : MoviesService,
               private router: Router ) {
   }

  ngOnInit(): void {
    this.getReciente();
    this.getPopulares();
    this.getKids();
  }

  getReciente(){
    this._movies.getRecientes().subscribe( movies=>{
      this.recientes = movies;
    });
  }
  getPopulares(){
    this._movies.getPopulares().subscribe( movies=>{
      this.populares = movies;      
    });
  }
  getKids(){
    this._movies.getKids().subscribe( movies=>{
      this.kids = movies;            
    });
  }

  verPelicula( idx ){
    this.router.navigate([ '/pelicula', idx ]);
    
  }

}
