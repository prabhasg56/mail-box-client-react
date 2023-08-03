import { createSlice } from "@reduxjs/toolkit";

const initialMailState = {
    composedMail: []
};

const mailSlice = createSlice({
    name: 'composedMail',
    initialState: initialMailState,
    reducers: {
        sentMails(state, action){
           
            state.composedMail = action.payload;
        }
    }
});

export const mailAction = mailSlice.actions;
export default mailSlice.reducer;