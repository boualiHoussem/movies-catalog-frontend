import {Movie} from "./movie.model";

export class MovieHolder {
  value: Movie;
  show: boolean;


  constructor(value: Movie, show: boolean) {
    this.value = value;
    this.show = show;
  }
}
