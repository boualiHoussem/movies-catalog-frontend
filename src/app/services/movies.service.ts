import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/movie.model";
import {MovieListType, MOVIES_API, MOVIES_LIST_API} from "../common/common.constants";
import {MovieList} from "../models/movie-list.model";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
  }

  getAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(MOVIES_API);
  }

  getFavourites(): Observable<MovieList> {
    return this.http.get<MovieList>(`${MOVIES_LIST_API}/${MovieListType.FAVOURITE}`);
  }

  addToFavourites(listId: number, movieId: number): Observable<any> {
    return this.http.post(`${MOVIES_LIST_API}/${listId}/movie/${movieId}`, null);
  }
}
