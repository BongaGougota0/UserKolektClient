import { inject, Injectable } from "@angular/core";
import { AuthService } from "../../services/session.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

    private authService = inject(AuthService);
    private action$ = inject(Actions);
    private router = inject(Router);

    loginEffect$ = createEffect(() => {
       return this.action$.pipe(
            ofType(authActions.loginUser),
            mergeMap((loginDetails) => this.authService.loginUser(loginDetails.email, loginDetails.password).pipe(
            map((response: HttpResponse<any>) => {
                const authorization = response.headers.get('Authorization');
                const userId = response.headers.get('UserId');
                if(userId && authorization) {
                    const headerData = {
                        authorization,
                        userId
                    }
                    return authActions.loginUserSuccess(headerData);
                }else {
                    return authActions.loginUserFailure({error: "Login response error from server."})
                }
            },
            catchError((error) => {
               return of(authActions.loginUserFailure(error))
            })
        ))
        ));
    });

    loginSucces$ = createEffect(() => {
        return this.action$.pipe(
            ofType(authActions.loginUserSuccess),
            tap(resp => {
                localStorage.setItem("Authorization", resp.authorization);
                localStorage.setItem("userId", resp.userId);
                this.router.navigate(['/home']);
            })
        )
    },{dispatch: false});

    logoutEffect$ = createEffect(() => {
        return this.action$.pipe(
            ofType(authActions.logoutUser),
            tap(() => {
                localStorage.removeItem("Authorization");
                localStorage.removeItem("userId");
                return of(authActions.logoutUserSuccess())
            }),
        catchError(error => of(authActions.logoutUserFailure(error))))
    });

}