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
    userElse: {}
}

const userElseSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUserElse: (state, {payload}) => {
            state.userElse = payload;
        }
    }, 
    extraReducers: {
        [fetchAsyncUsers.pending]: () => {
            console.log("userElse pending");
        }, 
        [fetchAsyncUsers.fulfilled]: (state, {payload}) => {
            console.log("userElse successfully");
            return {...state, userElse: payload};
        },
        [fetchAsyncUsers.rejected]: () => {
            console.log("useElse rejected");
        },

    }
});

export const { addUserElse } = userElseSlice.actions;
export const getUserElse = (state) => state.users.userElse;
export default userElseSlice.reducer;
