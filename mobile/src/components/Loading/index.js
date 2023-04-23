import { ActivityIndicator } from 'react-native';
import { Animation } from '../Animation';
import LoadingAnimation from '../../assets/animations/loading-animation.json';
import styled, { css } from 'styled-components/native';

const Container = styled.View`
  ${({ isAnimation, theme }) =>
    isAnimation &&
    css`
      flex: 1;
      background-color: ${theme.colors.background};
      align-items: center;
      justify-content: center;
      z-index: 15;
    `}
`;

export function Loading({ isAnimation }) {
  return (
    <Container isAnimation={isAnimation}>
      {isAnimation ? (
        <Animation source={LoadingAnimation} autoPlay={true} loop={true} size={100} />
      ) : (
        <ActivityIndicator />
      )}
    </Container>
  );
}
