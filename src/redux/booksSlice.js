import { createSlice } from '@reduxjs/toolkit';
import { booksData } from '../data/booksData';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: booksData, // Initialize Redux state with the dummy data
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
