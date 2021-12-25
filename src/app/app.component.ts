import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./state/app.state";
import {autoLogin} from "./auth/state/auth.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movies-catalog-frontend';


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(autoLogin());
  }
}
