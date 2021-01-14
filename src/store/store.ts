import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {userName} from './slices/userNameSlice'


const rootReducer = combineReducers({
    userName
})

const Store= configureStore({
    reducer:rootReducer
})

export default Store