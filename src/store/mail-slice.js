import { createSlice } from "@reduxjs/toolkit";

const initialMailState = {
  composedMail: [],
  totalUnreadMessage: 0,
};

const mailSlice = createSlice({
  name: "composedMail",
  initialState: initialMailState,
  reducers: {
    sentMails(state, action) {
      state.composedMail = action.payload;
    },
    
    updateUnreadMsg(state, action){
        state.totalUnreadMessage = action.payload;
    }
  },
});

export const mailAction = mailSlice.actions;
export default mailSlice.reducer;
