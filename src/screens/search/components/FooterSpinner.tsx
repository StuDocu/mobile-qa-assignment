import React from 'react';
import styled from 'styled-components/native';
import {Loader} from '../../../components/Loader';

export const FooterSpinner = ({isLoading}: {isLoading: boolean}) => {
  if (!isLoading) {
    return null;
  }

  return (
    <StyledLoaderWrap>
      <Loader />
    </StyledLoaderWrap>
  );
};

const StyledLoaderWrap = styled.View``;
