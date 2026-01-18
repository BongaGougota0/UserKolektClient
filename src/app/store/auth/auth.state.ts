import { UserEntity } from "../../models/user.model"

export interface AuthState {
    isloading: boolean,
    isLoggedIn: boolean,
    user?: UserEntity,
    userId?: string,
    jwt?: string,
    error?: string | null | ''
}

export const initialState: AuthState = {
    isloading: false,
    isLoggedIn: false,
    error: 'no user logged in.'
}