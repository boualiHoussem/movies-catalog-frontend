import {Injectable} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  autoLogin,
  loginStartAction,
  loginSuccessAction,
  LOGOUT_SUCCESS,
  logoutStartAction,
  logoutSuccessAction,
  registerStartAction,
  registerSuccessAction
} from "./auth.actions";
import {exhaustMap, map, mergeMap, tap} from "rxjs/operators";
import {
  clearLocalStorage,
  formatUser,
  getJwtToken,
  getUserFromLocalStorage,
  storeLoginDataInLocalStorage
} from "../../common/common.utils";
import {Router} from "@angular/router";
import {of} from "rxjs";

@Injectable()
export class AuthEffects {

  loginEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStartAction),
      exhaustMap((action) => {
          return this.authService.authenticate(action.username, action.password).pipe(
            map((data) => {
              const user = formatUser(data.user);
              storeLoginDataInLocalStorage(data.token, data.user);
              return loginSuccessAction({token: data.token, user: user, redirect: true})
            })
          )
        }
      )
    )
  });

  registerEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerStartAction),
      exhaustMap((action) => {
        return this.authService.register(action.user).pipe(
          tap(data => {
            return registerSuccessAction({redirect: true})
          })
        )
      })
    )
  });

  logoutEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logoutStartAction),
      mergeMap((action) => {
        console.log('Here')
        return this.authService.logout().pipe(
          map(() => {
            clearLocalStorage();
            return logoutSuccessAction({redirect: true});
          })
        )
      })
    )
  });

  redirectEffect$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(...[loginSuccessAction, registerSuccessAction, logoutSuccessAction]),
        tap((action) => {
          if (action.redirect) {
            if (action.type === LOGOUT_SUCCESS) {
              this.router.navigate(['/auth/login']);
            } else {
              this.router.navigate(['/movies/list']);
            }
          }
        })
      )
    },
    {dispatch: false}
  );

  autoLogin$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(autoLogin),
        mergeMap((action) => {
            const jwtToken = getJwtToken();
            const savedUser = getUserFromLocalStorage();
            return of(loginSuccessAction({token: jwtToken, user: savedUser, redirect: true}))
          }
        )
      )
    }
  );

  constructor(private authService: AuthService,
              private actions$: Actions,
              private router: Router) {
  }

}
