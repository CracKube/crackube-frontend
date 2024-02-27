import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncBlogLike = createAsyncThunk(
  "blogs/fetchAsyncBlogLike",
  async (id) => {
    try {
      const response = await axios.patch(
        `https://crackube-backend-test.onrender.com/blogs/like/${id}`,
        {
          userId: window.localStorage.getItem("userId"),
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncBlogLike.pending, (state) => {
        console.log("pending");
      })
      .addCase(fetchAsyncBlogLike.fulfilled, (state, { payload }) => {
        console.log("fetched successfully");
        state.likes = payload;
      })
      .addCase(fetchAsyncBlogLike.rejected, (state) => {
        console.log("rejected");
      });
  },
});

export const { addLikes } = blogOptions.actions;
export const getLikes = (state) => state.blogOptions.likes;
export default blogOptions.reducer;
