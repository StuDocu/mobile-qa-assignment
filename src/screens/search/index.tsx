import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styled from 'styled-components/native';
// Api
import {useSearchBooksQuery, util} from '../../api/openLibraryApi';
// Components
import {SearchInput} from '../../components/SearchInput';
import {BookItem} from '../../components/BookItem';
import {FooterSpinner} from './components/FooterSpinner';
import {ErrorComponent} from '../../components/ErrorComponent';
// Navigation
import {useRootNavigation, useSearchRoute} from '../../navigation';
// Redux
import {useAppDispatch} from '../../redux/store';
// Types
import {SearchBook} from '../../types';

export const SearchScreen = () => {
  const {
    params: {search = ''},
  } = useSearchRoute();
  const dispatch = useAppDispatch();
  const navigation = useRootNavigation();

  const [searchQuery, setSearchQuery] = useState(search);
  const [page, setPage] = useState(1);

  const {
    data: books,
    isLoading,
    isError,
    isFetching,
  } = useSearchBooksQuery({
    query: searchQuery,
    page,
  });

  const firstLoading = isFetching && page === 1;

  const loadItems = () => {
    if (!isLoading && books && books.length) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderItem = ({item}: {item: SearchBook}) => {
    return (
      <BookItem
        key={item.key}
        onPress={bookKey =>
          navigation.navigate('Book', {
            bookKey,
            author: item.author_name,
            pubYear: item.publish_year,
            cover: item.cover,
          })
        }
        bookKey={item.key}
        cover={item.cover}
        title={item.title}
        author={item.author_name}
        pubYear={item.publish_year}
      />
    );
  };

  return (
    <View>
      <SearchInput
        value={search}
        onSearch={query => {
          dispatch(util.resetApiState());
          setPage(1);
          setSearchQuery(query);
        }}
      />
      <StyledWrap>
        {!isFetching && !isError && (
          <Text>Total search results: {books?.length}</Text>
        )}
        {isError && <ErrorComponent text="Something went wrong" />}
      </StyledWrap>
      {!firstLoading ? (
        <FlatList
          contentContainerStyle={{paddingBottom: 20}}
          data={books}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          ListFooterComponent={<FooterSpinner isLoading={isLoading} />}
          onEndReached={loadItems}
          onEndReachedThreshold={0.5}
        />
      ) : (
        <FooterSpinner isLoading={true} />
      )}
    </View>
  );
};

const StyledWrap = styled.View`
  margin: 5px 10px;
`;
