import {createReducer, on} from "@ngrx/store";
import {addToFavouritesSuccessAction, loadFavouritesSuccessAction, loadMoviesSuccess} from "./movies.actions";
import {initialState} from "./movies.state";
import {logoutSuccessAction} from "../../auth/state/auth.actions";

const _moviesReducer = createReducer(
  initialState,
  on(loadMoviesSuccess, (state, action) => {
    return {
      ...state,
      movies: action.movies
    }
  }),
  on(logoutSuccessAction, (state, action) => {
    return {
      ...state,
      movies: null
    }
  }),
  on(loadFavouritesSuccessAction, (state, action) => {
    return {
      ...state,
      favourites: action.favourites
    }
  }),
  on(addToFavouritesSuccessAction, (state, action) => {
    return {
      ...state
    }
  })
);


export function moviesReducer(state: any, action: any) {
  return _moviesReducer(state, action);
}
