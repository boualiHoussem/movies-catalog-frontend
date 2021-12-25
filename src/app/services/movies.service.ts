import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/movie.model";
import {MOVIES_API} from "../common/common.constants";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
  }

  getAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(MOVIES_API);
  }
}
