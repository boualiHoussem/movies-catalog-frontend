import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {MoviesState} from "../state/movies.state";
import {MovieHolder} from "../../models/movie.holder";
import {loadFavouritesAction} from "../state/movies.actions";
import {getFavourites} from "../state/movies.selectors";
import {MovieList} from "../../models/movie-list.model";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favouriteList: MovieList = new MovieList();
  favouriteMoviesHolder: Array<MovieHolder> = new Array<MovieHolder>();

  constructor(private store: Store<MoviesState>) {
  }

  ngOnInit() {
    this.loadFavourites();
    this.store.dispatch(loadFavouritesAction());
  }

  loadFavourites() {
    this.store.select(getFavourites).subscribe((data) => {
      if (data) {
        this.favouriteList = data;
        this.favouriteMoviesHolder = data.movies.map(movie => new MovieHolder(movie, true));
      }
    });
  }

}
