import {createSlice} from '@reduxjs/toolkit';

const initialAuthState = {
    isAutenticate: false,
    idToken: null,
    userId: null,
    password: null,
    confirmPassword: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        signIn(state, action){
            state.userId= action.payload.email;
            state.password = action.payload.password;
        },
        signUp(state, action){
            state.userId= action.payload.email;
            state.password = action.payload.password;
            state.confirmPassword = action.payload.confirmPassword;
        },
        signOut(){

        }
    }
});

export const authAction = authSlice.actions;

export default authSlice.reducer;