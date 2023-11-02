import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {
  isInReading,
  isInWishlist,
  addToWishlist,
  removeFromWishlist,
  addToReading,
  removeFromReading,
} from '../redux/slices/myBooksSlice';
import {AppState, useAppDispatch} from '../redux/store';

import {IconButton} from './Button';

export const BookButtons = ({bookKey}: {bookKey: string}) => {
  const dispatch = useAppDispatch();
  const isWishListed = useSelector((state: AppState) =>
    isInWishlist(state, bookKey),
  );
  const isReading = useSelector((state: AppState) =>
    isInReading(state, bookKey),
  );

  const toggleWishList = useCallback(() => {
    const action = isWishListed ? removeFromWishlist : addToWishlist;

    dispatch(action(bookKey));
  }, [bookKey, dispatch, isWishListed]);

  const toggleReading = useCallback(() => {
    const action = isReading ? removeFromReading : addToReading;

    dispatch(action(bookKey));
  }, [bookKey, dispatch, isReading]);

  return (
    <StyledButtonWrap>
      <IconButton
        icon="star"
        size="small"
        type={isWishListed ? 'primary' : 'secondary'}
        onPress={toggleWishList}
      />
      <IconButton
        icon="book"
        size="small"
        type={isReading ? 'primary' : 'secondary'}
        onPress={toggleReading}
      />
    </StyledButtonWrap>
  );
};

const StyledButtonWrap = styled.View`
  flex-direction: row;
`;
