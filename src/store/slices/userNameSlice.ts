import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
    name:'user',
    initialState: '',
    reducers: {
      setUserName: (state, { payload }) => payload,
    },
})

const userName = userNameSlice.reducer;
const setUserName = userNameSlice.actions.setUserName;

export {userName, setUserName}