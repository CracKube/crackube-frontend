import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncUsers = createAsyncThunk('users/fetchAsyncUsers', async (id) => {
    const response = await axios.get(
        `https://api.crackube.com/users/getUser/${id}`
      );
      console.log(response.data);
      return response.data;
});

const initialState = {
    users : {}
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, {payload}) => {
            state.users = payload;
        }
    }, 
    extraReducers: {
        [fetchAsyncUsers.pending]: () => {
            console.log("pending");
        }, 
        [fetchAsyncUsers.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, users: payload};
        },
        [fetchAsyncUsers.rejected]: () => {
            console.log("rejected");
        },
    }
});

export const { addUser } = userSlice.actions;
export const getUser = (state) => state.users.users;
export default userSlice.reducer;