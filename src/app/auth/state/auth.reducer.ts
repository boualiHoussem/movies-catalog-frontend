import {createReducer, on} from "@ngrx/store";
import {initialState} from "./auth.state";
import {loginSuccessAction} from "./auth.actions";


const _authReducer = createReducer(
  initialState,
  on(loginSuccessAction, (state, action) => {
    return {
      ...state,
      token: action.token,
      user: action.user
    };
  })
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
