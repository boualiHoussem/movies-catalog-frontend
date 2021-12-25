import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MOVIES_STATE_NAME, MoviesState} from "./movies.state";


const getMoviesState = createFeatureSelector<MoviesState>(MOVIES_STATE_NAME);

export const getMovies = createSelector(getMoviesState, (state) => {
  return state.movies;
})
