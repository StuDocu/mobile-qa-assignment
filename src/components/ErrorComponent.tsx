import React from 'react';
import styled from 'styled-components/native';

export const ErrorComponent = ({text}: {text: string}) => (
  <StyledWrap>
    <StyledText>{text}</StyledText>
  </StyledWrap>
);

const StyledWrap = styled.View`
  align-items: center;
`;

const StyledText = styled.Text`
  color: #960505;
  font-weight: bold;
  font-size: 14px;
`;
