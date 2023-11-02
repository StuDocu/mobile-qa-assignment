import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useRootNavigation } from "../navigation";
import Icon from "react-native-vector-icons/FontAwesome";

export const TopPanel = () => {
  const navigation = useRootNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Reading")}>
      <StyledUserContainer>
        <Icon name="book" />
        <StyledUserName>Currently Reading</StyledUserName>
      </StyledUserContainer>
    </TouchableOpacity>
  );
};

const StyledUserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 5px;
`;

const StyledUserName = styled.Text`
  font-weight: bold;
  margin-left: 5px;
`;

const StyledUserPic = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 5px;
`;
