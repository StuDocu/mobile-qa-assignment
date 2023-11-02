import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
// Api
import {useGetBookQuery} from '../../api/openLibraryApi';
import {BookHeader} from '../../components/BookHeader';
// Navigation
import {useBookRoute} from '../../navigation';
// Components
import {ErrorComponent} from '../../components/ErrorComponent';
import {Loader} from '../../components/Loader';
import {BookCover} from '../../components/BookCover';
import {BookDetails} from '../../components/BookDetails';

export const BookScreen = () => {
  const {
    params: {bookKey, author, pubYear, cover},
  } = useBookRoute();
  const {data: book, isLoading, isError} = useGetBookQuery({bookKey});
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}>
      <ScrollView>
        <BookCover bookKey={bookKey} cover={cover} />
        {isLoading && <Loader />}
        {isError && <ErrorComponent text="Something went wrong" />}
        {!isLoading && !isError && (
          <StyledContainer>
            <BookHeader book={book} pubYear={pubYear} author={author} />
            <BookDetails book={book} />
          </StyledContainer>
        )}
      </ScrollView>
    </View>
  );
};

const StyledContainer = styled.View`
  margin: 0 10px;
`;
