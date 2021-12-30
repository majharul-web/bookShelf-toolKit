import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// First, create the thunk
export const fetchBooks = createAsyncThunk(
    'book/fetchBooks',
    async () => {
        const response = await fetch('https://raw.githubusercontent.com/majharul-web/bookShelf-reduxStart/main/src/fakeData/books.json').then(res => res.json())
        return response
    }
)

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        discover: [],
        readingList: [],
        finishedList: [],
        status: 'idle'
    },
    reducers: {
        addToReadingList: (state, { payload }) => {
            state.readingList.push(payload)
        },
        removeFormReadingList: (state, { payload }) => {
            state.readingList = state.readingList.filter(book => book.id !== payload.id);
        },
        addToFinishList: (state, { payload }) => {
            state.finishedList.push(payload)
        },
        removeFormFinishList: (state, { payload }) => {
            state.finishedList = state.finishedList.filter(book => book.id !== payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.discover = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchBooks.pending, (state, action) => {
            state.status = 'pending';
        })
    },

});

export const { addToReadingList, removeFormReadingList, addToFinishList, removeFormFinishList } = bookSlice.actions;

export default bookSlice.reducer