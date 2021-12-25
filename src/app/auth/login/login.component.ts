import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AuthState} from "../state/auth.state";
import {loginStartAction} from "../state/auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private store: Store<AuthState>) {
  }

  get username() {
    return this.loginFormGroup.get('username');
  }

  get password() {
    return this.loginFormGroup.get('password');
  }

  ngOnInit() {
    this.initForm();
  }

  onLoginSubmit() {
    if (!this.loginFormGroup.valid) {
      return;
    }
    const usernameValue = this.username?.value;
    const passwordValue = this.password?.value;
    this.store.dispatch(loginStartAction({
      username: usernameValue,
      password: passwordValue
    }));
  }

  initForm() {
    this.loginFormGroup = new FormGroup( {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

}
