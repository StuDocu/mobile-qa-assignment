import React from "react";
import { View } from "react-native";
import { useGetBookQuery } from "../../../api/openLibraryApi";
import { BookCover } from "../../../components/BookCover";
import { BookHeader } from "../../../components/BookHeader";
import { Loader } from "../../../components/Loader";

type Props = {
  bookKey: string;
};
export const ReadingItem = ({ bookKey }: Props) => {
  const { data: book, isLoading } = useGetBookQuery({ bookKey });

  if (!book) {
    return null;
  }
  return (
    <View>
      {isLoading && <Loader />}
      <BookCover
        bookKey={bookKey}
        cover={`https://covers.openlibrary.org/b/id/${book.cover}-M.jpg`}
        special
      />
      <BookHeader book={book} />
    </View>
  );
};
