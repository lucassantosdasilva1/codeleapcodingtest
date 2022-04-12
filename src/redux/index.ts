import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import {userSliceReducer} from './userSlice'
import {postSliceReducer} from './postSlice'

const reducersList = combineReducers({
    userSliceReducer,
    postSliceReducer,
})

export const store = configureStore ({
    reducer: {
        reducersList
    }
})

export type RootState = ReturnType<typeof store.getState>