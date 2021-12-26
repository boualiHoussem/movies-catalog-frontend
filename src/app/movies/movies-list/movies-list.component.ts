import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {addToFavouritesAction, loadMovies} from '../state/movies.actions';
import {MoviesState} from '../state/movies.state';
import {MovieHolder} from "../../models/movie.holder";
import {getFavouritesId, getMovies} from "../state/movies.selectors";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  moviesHolders: Array<MovieHolder>;

  constructor(private store: Store<MoviesState>) {
  }

  ngOnInit() {
    this.loadMovies();
    this.store.dispatch(loadMovies());
  }

  loadMovies() {
    this.store.select(getMovies).subscribe(movies => {
        if (movies) {
          this.moviesHolders = movies.map(movie => new MovieHolder(movie, true));
        }
      }
    )
  }

  onMovieEmit(movieId: number) {
    let favListId;
    this.store.select(getFavouritesId).subscribe(value => {
      if (value) {
        favListId = value;
      }
    });
    this.store.dispatch(addToFavouritesAction({listId: favListId, movieId}));
  }
}
