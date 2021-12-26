import {createAction, props} from "@ngrx/store";
import {Movie} from "src/app/models/movie.model";
import {MovieList} from "../../models/movie-list.model";

export const LOAD_MOVIES_ACTION = 'load-movies-action';
export const LOAD_MOVIES_SUCCESS_ACTION = 'load-movies-success-action';
export const ADD_TO_FAVOURITES_ACTION = 'add-to-favourites-action';
export const ADD_TO_FAVOURITES_ACTION_SUCCESS = 'add-to-favourites-action-success';

export const LOAD_FAVOURITES = "load-favourites-action";
export const LOAD_FAVOURITES_SUCCESS = "load-favourites-success-action";

export const loadMovies = createAction(LOAD_MOVIES_ACTION);

export const loadMoviesSuccess = createAction(LOAD_MOVIES_SUCCESS_ACTION,
  props<{ movies: Array<Movie> }>());

export const loadFavouritesAction = createAction(
  LOAD_FAVOURITES
);

export const loadFavouritesSuccessAction = createAction(
  LOAD_FAVOURITES_SUCCESS,
  props<{ favourites: MovieList }>()
);

export const addToFavouritesAction = createAction(
  ADD_TO_FAVOURITES_ACTION,
  props<{ listId: number, movieId: number }>()
);

export const addToFavouritesSuccessAction = createAction(
  ADD_TO_FAVOURITES_ACTION_SUCCESS
);
