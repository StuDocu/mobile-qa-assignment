import {store} from '../../store';

import {
  addToReading,
  addToWishlist,
  isInReading,
  isInWishlist,
  removeFromReading,
  removeFromWishlist,
} from '../myBooksSlice';

describe('My Book Slice redux tests', () => {
  it('Should initially set wishlist to empty', () => {
    const state = store.getState().myBooks;
    expect(state.wishlist).toEqual([]);
  });

  it('Should initially set reading to empty', () => {
    const state = store.getState().myBooks;
    expect(state.reading).toEqual([]);
  });

  it('Handles addToWishlist', () => {
    store.dispatch(addToWishlist('book1'));
    const state = store.getState().myBooks;
    expect(state.wishlist).toContain('book1');
  });

  it('Handles removeFromWishlist', () => {
    store.dispatch(addToWishlist('book1'));
    store.dispatch(removeFromWishlist('book1'));
    const state = store.getState().myBooks;
    expect(state.wishlist).not.toContain('book1');
  });

  it('Handles addToReading', () => {
    store.dispatch(addToReading('book1'));
    const state = store.getState().myBooks;
    expect(state.reading).toContain('book1');
  });

  it('Handles removeFromReading', () => {
    store.dispatch(addToReading('book1'));
    store.dispatch(removeFromReading('book1'));
    const state = store.getState().myBooks;
    expect(state.reading).not.toContain('book1');
  });

  it('isInReading returns book if in reading list', () => {
    store.dispatch(addToReading('book1'));
    const state = store.getState();
    expect(isInReading(state, 'book1')).toEqual('book1');
  });

  it('isInReading returns undefined if not in reading list', () => {
    store.dispatch(removeFromReading('book1'));
    const state = store.getState();
    expect(isInReading(state, 'book1')).toBeUndefined();
  });

  it('isInWishlist returns book if in wishlist', () => {
    store.dispatch(addToWishlist('book1'));
    const state = store.getState();
    expect(isInWishlist(state, 'book1')).toEqual('book1');
  });

  it('isInWishlist returns undefined if not in wishlist', () => {
    store.dispatch(removeFromWishlist('book1'));
    const state = store.getState();
    expect(isInWishlist(state, 'book1')).toBeUndefined();
  });
});
