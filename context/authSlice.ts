//  Importing helper modules
import {
    type Slice,
    type PayloadAction,
    createSlice,
} from "@reduxjs/toolkit";

interface AuthState {
    username: string;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    username: "",
    isAuthenticated: false,
};

const AuthSlice: Slice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        authSuccess: (
            state: AuthState,
            action: PayloadAction<{
                isAuthenticated: boolean;
                username: string;
            }>
        ) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.username = action.payload.username;
        },
        authReset: (state: AuthState) => {
            state.isAuthenticated = false;
            state.username = "";
        },
    },
});

export const { authSuccess, authReset } = AuthSlice.actions;

export default AuthSlice.reducer;
