import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAsyncBlogs = createAsyncThunk('blogs/fetchAsyncBlogs', async (setLoading) => {
    const response = await fetch(
        "https://crackube-backend-test.onrender.com/blogs/getAll"
      );
      const data = await response.json();
      setLoading(false)
      return data;
});

export const fetchAsyncBlogDetail = createAsyncThunk('blogs/fetchAsyncBlogDetail', async (id) => {
    const response = await fetch(
        `https://crackube-backend-test.onrender.com/blogs/get/${id}`
      );
      const data = await response.json();
      return data;
});
const initialState = {
    blogs: [],
    selectedBlog : []
};

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        addBlogs: (state, {payload}) => {
            state.blogs = payload;
        }
    }, 
    extraReducers: {
        [fetchAsyncBlogs.pending]: () => {
            console.log("pending");
        }, 
        [fetchAsyncBlogs.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, blogs: payload};
        },
        [fetchAsyncBlogs.rejected]: () => {
            console.log("rejected");
        },
        [fetchAsyncBlogDetail.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, selectedBlog: payload};
        },
    }
});

export const { addBlogs } = blogSlice.actions;
export const getAllBlog = (state) => state.blogs.blogs;
export const getSelectedBlog = (state) => state.blogs.selectedBlog;
export default blogSlice.reducer;