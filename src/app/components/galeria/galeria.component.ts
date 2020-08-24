import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  
  @Input('peliculas') movies;
  @Input('titulo') titulo;
  @Input('pagina') pagina;
  
  // pagina: string = 'home'

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }


  verPelicula( idx ){
    this.router.navigate([ '/pelicula', idx, this.pagina ]);
    
  }

}
