import { createAction, props } from '@ngrx/store';
import { AuthState } from './auth.state';

export const loginUser = createAction(
   "[login Page] Login user",
   props<{email: string, password: string}>()
)

export const loginUserSuccess = createAction(
    "[login Page] Success login",
    props<{userId: string, authorization: string }>()
)

export const loginUserFailure = createAction(
    "[login Page] login failed",
    props<{error: string | 'Error authenticating user.'}>()
)


export const logoutUser = createAction(
    "[Auth] logout",
)

export const logoutUserSuccess = createAction(
    "[Auth] logout success",
)

export const logoutUserFailure = createAction(
    "[Auth] logout failed",
    props<{error: string}>()
)