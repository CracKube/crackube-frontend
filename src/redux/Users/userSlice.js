import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAsyncUsersSelf = createAsyncThunk('users/fetchAsyncUsers', async () => {
    const response = await axios.get(
        `https://api.crackube.com/users/getUser/${window.localStorage.getItem("userId")}`
      );
      // 
      console.log(response.data);
      return response.data;
});

const initialState = {
    users : {},
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, {payload}) => {
            state.users = payload;
        },
    }, 
    extraReducers: {

        [fetchAsyncUsersSelf.pending]: () => {
            console.log("pending");
        }, 
        [fetchAsyncUsersSelf.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully user");
            return {...state, users: payload};
        },
        [fetchAsyncUsersSelf.rejected]: () => {
            console.log("rejected");
        },
    }
});

export const { addUser } = userSlice.actions;
export const getUser = (state) => state.users.users;

export default userSlice.reducer;