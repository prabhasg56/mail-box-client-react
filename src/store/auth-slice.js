import {createSlice} from '@reduxjs/toolkit';

const initialAuthState = {
    isAutenticate: !!localStorage.getItem('token'),
    idToken: localStorage.getItem('token'),
    userId: localStorage.getItem('loginEmail'),
    password: null,
    confirmPassword: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        signIn(state, action){
            state.userId= action.payload.userId;
            state.idToken = action.payload.idToken;
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