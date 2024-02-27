import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncBlogs = createAsyncThunk(
  'blogs/fetchAsyncBlogs',
  async (_, { dispatch }) => {
    try {
      const response = await fetch("https://crackube-backend-test.onrender.com/blogs/getAll");
      const data = await response.json();
      dispatch(setLoading(false));
      return data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  }
);

export const fetchAsyncBlogDetail = createAsyncThunk(
  'blogs/fetchAsyncBlogDetail',
  async (id) => {
    try {
      const response = await fetch(`https://crackube-backend-test.onrender.com/blogs/get/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching blog detail:", error);
      throw error;
    }
  }
);

export const setLoading = (isLoading) => {
  // You can dispatch other actions here if needed
  return {
    type: 'blogs/setLoading',
    payload: isLoading
  };
};

const initialState = {
  blogs: [],
  selectedBlog: []
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlogs: (state, { payload }) => {
      state.blogs = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncBlogs.pending, (state) => {
        console.log("pending");
      })
      .addCase(fetchAsyncBlogs.fulfilled, (state, { payload }) => {
        console.log("fetched successfully");
        state.blogs = payload;
      })
      .addCase(fetchAsyncBlogs.rejected, (state) => {
        console.log("rejected");
      })
      .addCase(fetchAsyncBlogDetail.fulfilled, (state, { payload }) => {
        console.log("fetched successfully");
        state.selectedBlog = payload;
      });
  }
});

export const { addBlogs } = blogSlice.actions;
export const getAllBlog = (state) => state.blogs.blogs;
export const getSelectedBlog = (state) => state.blogs.selectedBlog;
export default blogSlice.reducer;
