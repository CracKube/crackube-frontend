import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from './Blogs/blogSlice'
import usersReducer from './Users/userSlice'
import userElseReducer from "./Users/userElseSlice";
import blogOptionsReducer from './Blogs/blogOptions'
import answerReducer from './Answer/answerSlice'
export const store = configureStore({
    reducer: {
        blogs : blogsReducer,
        users : usersReducer,
        userElse : userElseReducer,
        likes : blogOptionsReducer,
        answers : answerReducer
    }
});