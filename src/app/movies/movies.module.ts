import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {FavouritesComponent} from "./favourites/favourites.component";
import {MoviesListComponent} from "./movies-list/movies-list.component";
import {moviesReducer} from "./state/movies.reducer";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {CommonModule} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {MoviesEffects} from "./state/movies.effects";
import {MOVIES_STATE_NAME} from "./state/movies.state";
import { MovieCardComponent } from './movie-card/movie-card.component';

const routes: Routes = [
  {
    path: 'list',
    component: MoviesListComponent
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  }
];

@NgModule({
  declarations: [
    MoviesListComponent,
    FavouritesComponent,
    WishlistComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([MoviesEffects]),
    StoreModule.forFeature(MOVIES_STATE_NAME, moviesReducer),
    RouterModule.forChild(routes)
  ]
})
export class MoviesModule {
}
