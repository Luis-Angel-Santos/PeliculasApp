import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieDetailsResponse } from '../../interfaces/movie-response';
import { Movie } from '../../interfaces/cartelera-response';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieDetailsResponse;

  constructor(private activatedRouter: ActivatedRoute,
              private peliculasService: PeliculasService,
              private location: Location) { }

  ngOnInit(): void {
    const { id }=this.activatedRouter.snapshot.params;
    this.peliculasService.getPeliculaDetalle(id).subscribe(movie=>{
      this.pelicula=movie;
    })
  
  }

  onRegresar(){
    this.location.back();
  }

}

