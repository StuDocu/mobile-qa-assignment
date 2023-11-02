import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  Book,
  OpenLibraryBook,
  OpenLibrarySearchResults,
  SearchBook,
} from '../types';

export const openLibraryApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'https://openlibrary.org'}),
  endpoints: builder => ({
    searchBooks: builder.query({
      query: ({query, page}) => `search.json?q=${query}&page=${page}`,
      transformResponse: (response: OpenLibrarySearchResults): SearchBook[] => {
        return response.docs
          .filter(doc => doc.type === 'work')
          .map(book => ({
            ...book,
            cover: book.oclc
              ? `https://covers.openlibrary.org/b/oclc/${book.oclc[0]}-L.jpg`
              : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png',
            author_name: book.author_name ? book.author_name[0] : 'Unknown',
            publish_year: book.publish_year ? book.publish_year[0] : 'Unknown',
          }));
      },
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      merge: (currentCache, newItems, otherArgs) => {
        if (otherArgs.arg.page === 1) {
          return newItems;
        }

        return [...currentCache, ...newItems];
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg;
      },
    }),
    getBook: builder.query({
      query: ({bookKey}) => `${bookKey}.json`,
      transformResponse: (response: OpenLibraryBook): Book => ({
        title: response.title,
        description: response.description,
        subject_people: response.subject_people || [],
        cover: response.covers ? response.covers[0] : null,
        links: response.links || [],
      }),
    }),
  }),
});

export const {useGetBookQuery, useSearchBooksQuery, util} = openLibraryApi;
