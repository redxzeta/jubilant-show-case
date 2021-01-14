import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
    name:'user',
    initialState: '',
    reducers: {
      setName: (state, { payload }) => payload,
    },
})

const userName = userNameSlice.reducer;
const setUserName = userNameSlice.actions.setName;

export {userName, setUserName}