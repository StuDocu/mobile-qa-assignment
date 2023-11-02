import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState} from '../store';

const initialState: {wishlist: string[]; reading: string[]} = {
  wishlist: [],
  reading: [],
};

export const myBooksSlice = createSlice({
  name: 'myBooks',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<string>) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist.filter(id => id !== action.payload);
    },
    addToReading: (state, action: PayloadAction<string>) => {
      state.reading.push(action.payload);
    },
    removeFromReading: (state, action: PayloadAction<string>) => {
      state.reading = state.reading.filter(id => id !== action.payload);
    },
  },
});

export const isInReading = ({myBooks: {reading}}: AppState, key: string) =>
  reading.find(bookKey => bookKey === key);

export const myReading = ({myBooks: {reading}}: AppState) => reading;

export const isInWishlist = ({myBooks: {wishlist}}: AppState, key: string) =>
  wishlist.find(bookKey => bookKey === key);

export const {
  addToWishlist,
  addToReading,
  removeFromWishlist,
  removeFromReading,
} = myBooksSlice.actions;

export default myBooksSlice.reducer;
