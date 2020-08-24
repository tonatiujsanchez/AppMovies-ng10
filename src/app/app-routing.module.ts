import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'buscador',
    component :BuscadorComponent
  },
  {
    path:'buscador/:texto',
    component :BuscadorComponent
  },
  {
    path:'pelicula/:id/:pag',
    component: PeliculaComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
