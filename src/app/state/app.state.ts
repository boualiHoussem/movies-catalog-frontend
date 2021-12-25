import {AUTH_STATE_NAME, AuthState} from "../auth/state/auth.state";
import {MOVIES_STATE_NAME, MoviesState} from "../movies/state/movies.state";
import {authReducer} from "../auth/state/auth.reducer";
import {moviesReducer} from "../movies/state/movies.reducer";

export interface AppState {
  [AUTH_STATE_NAME]: AuthState,
  [MOVIES_STATE_NAME]: MoviesState
}

export const appReducer = {
  [AUTH_STATE_NAME]: authReducer,
  [MOVIES_STATE_NAME]: moviesReducer
}
