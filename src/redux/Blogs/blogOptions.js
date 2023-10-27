import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAsyncBlogLike = createAsyncThunk(
  "blogs/fetchAsyncBlogLike",
  async (id) => {
    axios
      .patch(`https://crackube-backend-test.onrender.com/blogs/like/${id}`, {
        userId: window.localStorage.getItem("userId"),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

const initialState = {
  likes: {},
};

const blogOptions = createSlice({
  name: "blogOptions",
  initialState,
  reducers: {
    addLikes: (state, { payload }) => {
      state.likes = payload;
    },
  },
  extraReducers: {
    [fetchAsyncBlogLike.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncBlogLike.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, likes: payload };
    },
    [fetchAsyncBlogLike.rejected]: () => {
      console.log("rejected");
    },
  },
});
export const { addLikes } = blogOptions.actions;
export const getLikes = (state) => state.blogOptions.likes;
export default blogOptions.reducer;
