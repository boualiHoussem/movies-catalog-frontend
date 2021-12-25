import {createReducer, on} from "@ngrx/store";
import {loadMoviesSuccess} from "./movies.actions";
import {initialState} from "./movies.state";

const _moviesReducer = createReducer(
  initialState,
  on(loadMoviesSuccess, (state, action) => {
    return {
      ...state,
      movies: action.movies
    }
  })
)


export function moviesReducer(state: any, action: any) {
  return _moviesReducer(state, action);
}
