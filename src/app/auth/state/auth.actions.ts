import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user.model";
import {RegisterModel} from "../../models/register.model";

export const LOGIN_START = "auth-login-start"
export const LOGIN_SUCCESS = "auth-login-success"
export const LOGIN_FAIL = "auth-login-fail"

export const REGISTER_START = "auth-register-start";
export const REGISTER_SUCCESS = "auth-register-success";

export const AUTO_LOGIN = "auth-auto-login";

export const loginStartAction = createAction(
  LOGIN_START,
  props<{ username: string, password: string }>()
);

export const loginSuccessAction = createAction(
  LOGIN_SUCCESS,
  props<{ token: string, user: User, redirect: boolean }>()
);

export const registerStartAction = createAction(
  REGISTER_START,
  props<{ user: RegisterModel }>()
);

export const registerSuccessAction = createAction(
  REGISTER_SUCCESS,
  props<{ redirect: true }>()
);

export const autoLogin = createAction(
  AUTO_LOGIN
);


