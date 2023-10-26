import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from './Blogs/blogSlice'
import usersReducer from './Users/userSlice'
export const store = configureStore({
    reducer: {
        blogs : blogsReducer,
        users : usersReducer
    }
});