import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        username: "",
        isLogged: false,
    },
    reducers: {
        changeUserAction (state, {payload}) {
            state.username = payload;
            state.isLogged = true;
        }
    }
});

export const { changeUserAction } = userSlice.actions

export const userSliceReducer = userSlice.reducer;