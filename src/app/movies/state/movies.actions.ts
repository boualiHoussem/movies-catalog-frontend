import {createAction, props} from "@ngrx/store";
import {Movie} from "src/app/models/movie.model";

export const LOAD_MOVIES_ACTION = 'load-movies-action';
export const LOAD_MOVIES_SUCCESS_ACTION = 'load-movies-success-action';
export const ADD_MOVIE_ACTION = 'add-movie-action';

export const loadMovies = createAction(LOAD_MOVIES_ACTION);
export const loadMoviesSuccess = createAction(LOAD_MOVIES_SUCCESS_ACTION,
  props<{ movies: Array<Movie> }>());
export const addMovie = createAction(ADD_MOVIE_ACTION, props<{ movie: Movie }>());
