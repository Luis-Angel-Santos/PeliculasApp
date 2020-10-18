import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingComponent } from 'ng-starrating/lib/rating.component';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
  NavbarComponent,
  SlideshowComponent,
  PeliculasPosterGridComponent
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule
  ]
})
export class ComponentsModule { }
