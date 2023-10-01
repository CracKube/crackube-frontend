import { configureStore } from "@reduxjs/toolkit";
import userDetails from './user/details.js';
export const store = configureStore
({
    reducer: {
        details: userDetails,
    }
});