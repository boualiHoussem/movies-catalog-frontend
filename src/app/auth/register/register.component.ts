import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatchingPasswordValidator} from "../../common/common.validators";
import {Store} from "@ngrx/store";
import {AuthState} from "../state/auth.state";
import {RegisterModel} from "../../models/register.model";
import {registerStartAction} from "../state/auth.actions";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private store: Store<AuthState>) {
  }

  get firstName() {
    return this.registerForm.get("firstName");
  }

  get lastName() {
    return this.registerForm.get("lastName");
  }

  get birthday() {
    return this.registerForm.get("birthday");
  }

  get username() {
    return this.registerForm.get("username");
  }

  get password() {
    return this.registerForm.get("password");
  }

  get confirm() {
    return this.registerForm.get("confirm");
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('', [Validators.required])
    }, {
      validators: [MatchingPasswordValidator]
    })
  }

  onRegisterSubmit() {
    if (!this.registerForm.valid) {
      return;
    }
    const registerModel = new RegisterModel(
      this.firstName.value,
      this.lastName.value,
      this.birthday.value,
      this.username.value,
      this.password.value
    )
    this.store.dispatch(registerStartAction({
      user: registerModel
    }));
  }

}
