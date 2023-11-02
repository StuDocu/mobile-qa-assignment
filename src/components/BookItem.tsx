import React from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SharedElement} from 'react-navigation-shared-element';
import styled from 'styled-components/native';
import {BookButtons} from './BookButtons';

type Props = {
  bookKey: string;
  title: string;
  author: string;
  pubYear: number | string;
  cover: string;
  onPress: (bookKey: string) => void;
};
export const BookItem = React.memo(
  ({title, author, pubYear, cover, bookKey, onPress}: Props) => {
    return (
      <TouchableOpacity onPress={() => onPress(bookKey)}>
        <StyledWrap>
          <SharedElement id={`item_${bookKey}`}>
            <StyledImage
              resizeMode={FastImage.resizeMode.cover}
              source={{uri: cover}}
            />
          </SharedElement>
          <StyledDecription>
            <StyledBookTitle>{title}</StyledBookTitle>
            <StyledAuthor>{author}</StyledAuthor>
            <StyledFooter>
              <StyledAuthor>{pubYear}</StyledAuthor>
              <BookButtons bookKey={bookKey} />
            </StyledFooter>
          </StyledDecription>
        </StyledWrap>
      </TouchableOpacity>
    );
  },
);

const StyledWrap = styled.View`
  flex-direction: row;
  margin: 5px 0;
  padding: 0 10px;
`;

const StyledDecription = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
`;

const StyledFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledBookTitle = styled.Text`
  font-weight: bold;
`;

const StyledAuthor = styled.Text`
  font-size: 12px;
`;

const StyledImage = styled(FastImage)`
  width: 100px;
  height: 170px;
  border-radius: 10px;
`;
