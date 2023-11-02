import React from 'react';
import styled from 'styled-components/native';
import {SearchInput} from '../../components/SearchInput';
import {useRootNavigation} from '../../navigation';

export const HomeScreen = () => {
  const navigation = useRootNavigation();

  return (
    <StyledContainer>
      <SearchInput
        onSearch={text => navigation.navigate('Search', {search: text})}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
`;
