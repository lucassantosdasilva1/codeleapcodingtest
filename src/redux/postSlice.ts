import {createSlice} from "@reduxjs/toolkit"

import { PostDTO } from "../DTO/PostDTO";

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        posts: [],
    },
    reducers: {
        setPostsAction(state: any, {payload} : {payload : PostDTO[]}){
            state.posts = payload;
        }
    }

})

export const {setPostsAction} = postSlice.actions;
export const postSliceReducer = postSlice.reducer;