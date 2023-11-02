import React, {useState} from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import styled from 'styled-components/native';

import {IconButton} from './Button';

type Props = {
  value?: string;
  onSearch: (text: string) => void;
};
export const SearchInput = ({onSearch, value = ''}: Props) => {
  const [searchValue, setSearchValue] = useState<string>(value);

  return (
    <SharedElement id="search_bar">
      <StyledWrap>
        <StyledTextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setSearchValue}
          value={searchValue}
          placeholder="Search"
        />
        <IconButton
          onPress={() => onSearch(searchValue)}
          icon="search"
          type="transparent"
        />
      </StyledWrap>
    </SharedElement>
  );
};

const StyledWrap = styled.View`
  margin: 10px;
  background-color: #bbb;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  padding: 10px;
`;
