import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { loadMovies } from '../state/movies.actions';
import { MoviesState } from '../state/movies.state';
import {getMovies} from "../state/movies.selectors";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {


 movies$: Observable<Array<Movie>>;
  constructor(private store: Store<MoviesState>) { }

  ngOnInit() {
    this.movies$ = this.store.select(getMovies);
    this.store.dispatch(loadMovies());
  }

}
