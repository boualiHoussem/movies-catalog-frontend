import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AUTH_STATE_NAME, AuthState} from "./auth.state";


const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getToken = createSelector(getAuthState, (state) => {
  return state.token;
});

export const getUser = createSelector(getAuthState, (state) => {
  return state.user;
});

export const isAuthenticated = createSelector(getAuthState, (state) => {
  return !!(state.token && state.user);
});
