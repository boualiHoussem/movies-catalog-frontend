import {Injectable} from "@angular/core";
import {MoviesService} from "../../services/movies.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadMovies, loadMoviesSuccess} from "./movies.actions";
import {map, mergeMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesEffects {


  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadMovies),
      mergeMap(action => {
        return this.moviesService.getAllMovies().pipe(
          map(movies => {
            return loadMoviesSuccess({movies});
          })
        )
      })
    )
  });

  constructor(private moviesService: MoviesService,
              private actions$: Actions) {
  }
}
