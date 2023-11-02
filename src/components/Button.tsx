import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

const SIZE = {
  medium: 25,
  small: 20,
};

const TYPE = {
  default: '#106bab',
  primary: '#1075ab',
  secondary: '#9b9b9b',
  transparent: 'transparent',
};

type Props = {
  icon: string;
  size?: keyof typeof SIZE;
  onPress: () => void;
  type?: keyof typeof TYPE;
};
export const IconButton = ({
  icon,
  size = 'medium',
  type = 'default',
  onPress,
}: Props) => (
  <StyledButton onPress={onPress} $type={type}>
    <Icon
      name={icon}
      size={SIZE[size]}
      color={type !== 'transparent' ? '#fff' : '#555'}
    />
  </StyledButton>
);

const StyledButton = styled.TouchableOpacity<{$type: keyof typeof TYPE}>`
  border-radius: 5px;
  padding: 5px;
  background-color: ${({$type}) => TYPE[$type]};
  margin: 2px;
`;
