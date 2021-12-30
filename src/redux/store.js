import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './slieces/bookSlices';

export const store = configureStore({
    reducer: {
        books: bookReducer,
    },
})