import {Injectable} from "@angular/core";
import {MoviesService} from "../../services/movies.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  addToFavouritesAction,
  addToFavouritesSuccessAction,
  loadFavouritesAction,
  loadFavouritesSuccessAction,
  loadMovies,
  loadMoviesSuccess
} from "./movies.actions";
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
          map((movies) => {
            return loadMoviesSuccess({movies});
          })
        )
      })
    )
  });

  loadFavouritesEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadFavouritesAction),
      mergeMap((action) => {
        return this.moviesService.getFavourites().pipe(
          map((movieList) => {
            return loadFavouritesSuccessAction({favourites: movieList})
          })
        )
      })
    );
  });

  addToFavouritesEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addToFavouritesAction),
      mergeMap((action) => {
        return this.moviesService.addToFavourites(action.listId, action.movieId).pipe(
          map((data) => {
            return addToFavouritesSuccessAction();
          })
        )
      })
    )
  });


  constructor(private moviesService: MoviesService,
              private actions$: Actions) {
  }
}
