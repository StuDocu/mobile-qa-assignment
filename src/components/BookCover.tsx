import React from "react";
import FastImage from "react-native-fast-image";
import { SharedElement } from "react-navigation-shared-element";
import styled from "styled-components/native";

import { BookButtons } from "./BookButtons";

type Props = {
  bookKey: string;
  cover: string;
  special?: boolean;
};
export const BookCover = ({ bookKey, cover, special }: Props) => {
  return (
    <>
      <SharedElement id={`item_${bookKey}`}>
        <StyledImage
          resizeMode={FastImage.resizeMode.cover}
          source={{ uri: cover }}
          defaultSource={require("../../assets/noimage.png")}
        />
      </SharedElement>
      <StyledContainer>
        <BookButtons bookKey={bookKey} special={special} />
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
