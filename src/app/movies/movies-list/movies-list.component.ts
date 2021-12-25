import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Movie} from 'src/app/models/movie.model';
import {loadMovies} from '../state/movies.actions';
import {MoviesState} from '../state/movies.state';
import {MovieHolder} from "../../models/movie.holder";
import {getMovies} from "../state/movies.selectors";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {


  isReadMore = true
  movies$: Observable<Array<Movie>>;
  moviesHolders: Array<MovieHolder>;

  constructor(private store: Store<MoviesState>) {
  }

  ngOnInit() {
    this.loadMovies();
    this.store.dispatch(loadMovies());
  }

  loadMovies() {
    this.store.select(getMovies).subscribe(movies => {
        this.moviesHolders = movies.map(movie => new MovieHolder(movie, true));
      }
    )
  }

  onReadMore(holder: MovieHolder) {
    holder.show = !holder.show;
  }
}
