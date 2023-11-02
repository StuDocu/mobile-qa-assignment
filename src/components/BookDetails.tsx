import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import useLinking from '../hooks/useLinking';
import {Book} from '../types';

export const BookDetails = ({book}: {book: Book | undefined}) => {
  const {openUrl, linkingError} = useLinking();

  useEffect(() => {
    if (linkingError) {
      Alert.alert(linkingError);
    }
  }, [linkingError]);

  if (!book) {
    return null;
  }

  const {description, subject_people, links} = book;

  return (
    <>
      <StyledSection>
        <StyledSectionTitle>Book Summary</StyledSectionTitle>
        <StyledSectionText>
          {typeof description === 'string' ? description : description?.value}
        </StyledSectionText>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>Subject people</StyledSectionTitle>
        <StyledSectionText>{subject_people.join(', ')}</StyledSectionText>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>Related links</StyledSectionTitle>
        {links.map(({url, title}) => (
          <StyledLink key={url} onPress={() => openUrl(url)}>
            <StyledLinkText>{title}</StyledLinkText>
          </StyledLink>
        ))}
      </StyledSection>
    </>
  );
};

const StyledSection = styled.View`
  margin: 5px 0;
  padding: 5px 0;
`;

const StyledSectionTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`;

const StyledSectionText = styled.Text`
  color: #4d4d4d;
`;

const StyledLink = styled.TouchableOpacity`
  margin: 5px 0;
`;

const StyledLinkText = styled.Text`
  color: #00008b;
`;
