import { createReducer, on } from "@ngrx/store";
import { initialState } from './auth.state';
import * as authActions from './auth.actions';

 export const authFeatureKey = 'auth';

export const authReducers = createReducer(
    initialState,

    on(authActions.loginUser, (state) => ({
        ...state,
        isloading: true
    })),

    on(authActions.loginUserSuccess, (state, { userId, authorization }) => ({
        ...state,
        // user: state.user,
        userId: userId,
        jwt: authorization,
        isLoggedIn: true,
        isloading: false
    })),

    on(authActions.loginUserFailure, (state) => ({
        ...state,
        isLoggedIn: false,
        isloading: false
    })),

)