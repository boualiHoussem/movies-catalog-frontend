import { Movie } from "src/app/models/movie.model";

export const MOVIES_STATE_NAME = 'movies';

export interface MoviesState {
    movies: Array<Movie>
}

export const initialState: MoviesState = {
    movies: []
}
