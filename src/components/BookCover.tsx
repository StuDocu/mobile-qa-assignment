import React from 'react';
import FastImage from 'react-native-fast-image';
import {SharedElement} from 'react-navigation-shared-element';
import styled from 'styled-components/native';

import {BookButtons} from './BookButtons';

type Props = {
  bookKey: string;
  cover: string;
};
export const BookCover = ({bookKey, cover}: Props) => {
  return (
    <>
      <SharedElement id={`item_${bookKey}`}>
        <StyledImage
          resizeMode={FastImage.resizeMode.cover}
          source={{uri: cover}}
          defaultSource={require('../../assets/noimage.png')}
        />
      </SharedElement>
      <StyledContainer>
        <BookButtons bookKey={bookKey} />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  margin: 5px 10px;
`;

const StyledImage = styled(FastImage)`
  height: 350px;
`;
