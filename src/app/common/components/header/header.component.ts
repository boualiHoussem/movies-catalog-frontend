import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {isAuthenticated} from "../../../auth/state/auth.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated$: Observable<boolean>

  constructor(private appStore: Store<AppState>) {
  }

  ngOnInit() {
    this.isAuthenticated$ = this.appStore.select(isAuthenticated);
  }

}
