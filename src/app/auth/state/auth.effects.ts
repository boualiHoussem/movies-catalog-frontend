import {Injectable} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loginStartAction, loginSuccessAction, registerStartAction, registerSuccessAction} from "./auth.actions";
import {exhaustMap, map, tap} from "rxjs/operators";
import {formatUser, storeLoginDataInLocalStorage} from "../../common/common.utils";
import {Router} from "@angular/router";

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
  })

  redirectEffect$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(...[loginSuccessAction, registerSuccessAction]),
        tap((action) => {
          if (action.redirect) {
            this.router.navigate(['/movies/list']);
          }
        })
      )
    },
    {dispatch: false}
  )

  constructor(private authService: AuthService,
              private actions$: Actions,
              private router: Router) {
  }

}
