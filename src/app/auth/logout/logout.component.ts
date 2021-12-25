import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../state/app.state";
import {logoutStartAction} from "../state/auth.actions";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.store.dispatch(logoutStartAction());
  }


}
