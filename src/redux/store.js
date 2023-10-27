import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from './Blogs/blogSlice'
import usersReducer from './Users/userSlice'
import blogOptionsReducer from './Blogs/blogOptions'
import answerReducer from './Answer/answerSlice'
export const store = configureStore({
    reducer: {
        blogs : blogsReducer,
        users : usersReducer,
        likes : blogOptionsReducer,
        answers : answerReducer
    }
});