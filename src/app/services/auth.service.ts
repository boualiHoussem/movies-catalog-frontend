import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ACCESS_API} from "../common/common.constants";
import {Observable} from "rxjs";
import {LoginResponse} from "../models/login.response.model";
import {RegisterModel} from "../models/register.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${ACCESS_API}/authenticate`, {
      username: username,
      password: password
    });
  }

  register(user: RegisterModel): Observable<any> {
    console.log("Register ", user)
    return this.http.post(`${ACCESS_API}/register`, user);
  }

  logout(): Observable<any> {
    return this.http.post(`${ACCESS_API}/logout`, null);
  }
}
