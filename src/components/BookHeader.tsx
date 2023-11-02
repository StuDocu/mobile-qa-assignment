import React from "react";
import styled from "styled-components/native";
import { Book } from "../types";

type Props = {
  book: Book;
  author?: string;
  pubYear?: string | number;
};
export const BookHeader = ({ book, author, pubYear }: Props) => {
  return (
    <>
      <StyledTitleText>{book?.title}</StyledTitleText>
      <StyledAuthorContainer>
        <StyledBaseText>{author}</StyledBaseText>
        <StyledBaseText>{pubYear}</StyledBaseText>
      </StyledAuthorContainer>
    </>
  );
};

const StyledTitleText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  align-self: center;
  margin: 10px 0;
`;

const StyledAuthorContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledBaseText = styled.Text`
  font-size: 14px;
`;
