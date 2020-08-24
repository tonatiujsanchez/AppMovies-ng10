import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( ){ }
}



// *Utilizar la API de "TheMovieDB"
// *Usar parametros de ruta
//Usar Bootstrap 4

// === Estructura === 
// Navbar
//   -Home
//     *peliculas de cines actual
//     *Peliculas populares
//     *Peliculas para niños más populares
//         .Al hacer click sobre una, mostar la información de la palicula
//   -Busqueda
//     *Buscar peliculas
//     *Mostrar pelicualas buscadas
//     *Al hacer click en una pelicula, mostrar su información.

// === Pantalla de la pelicula ===
  // -Mostrar el porter en grande
  // -Mostrar la sinopsis de la pelicula
  // - debe poder regresar a la pagina anterior.
  // -La pagina anterior debe ser la misma, es decir:
  //   *Si estaba en el Home, regerar al home.
  //   *Si estaba en el Buscador, regresar con la busqueda. 