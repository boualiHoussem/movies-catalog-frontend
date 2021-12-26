import {Movie} from "src/app/models/movie.model";
import {MovieList} from "../../models/movie-list.model";

export const MOVIES_STATE_NAME = 'movies';

export interface MoviesState {
  movies: Array<Movie>,
  favourites: MovieList
}

export const initialState: MoviesState = {
  movies: null,
  favourites: null
}
