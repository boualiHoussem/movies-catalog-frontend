import {MovieHolder} from "./movie.holder";
import {Movie} from "./movie.model";

export class MovieList {
  id: number;
  name: string;
  type: string;
  movies: Array<Movie>;

  constructor(id?: number,
              name?: string,
              type?: string,
              movies?: Array<Movie>) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.movies = movies;
  }
}
