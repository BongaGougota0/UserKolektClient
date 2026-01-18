import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const featurekey = "auth";
export const selectAuthState = createFeatureSelector<AuthState>(featurekey);

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (state) => state.isLoggedIn
);

export const selectJWT = createSelector(
    selectAuthState,
    (state) => state.jwt
);