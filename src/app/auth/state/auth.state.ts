import {User} from "../../models/user.model";


export const AUTH_STATE_NAME = "auth-state"

export interface AuthState {
  token: string;
  user: User;
}

export const initialState: AuthState = {
  token: '',
  user: null
}
