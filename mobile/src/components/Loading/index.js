import { ActivityIndicator, Dimensions } from 'react-native';
import { Animation } from '../Animation';
import LoadingAnimation from '../../assets/animations/loading-animation.json';
import styled, { css } from 'styled-components/native';
const { width, height } = Dimensions.get('screen');
const animationSize = 100;

const Container = styled.View`
  ${({ isAnimation, hasScroll, theme }) =>
    isAnimation &&
    css`
      background-color: ${theme.colors.background};
      align-items: center;
      justify-content: center;
      z-index: 15;
      width: ${width}px;
      height: ${height - (hasScroll ? animationSize * 1.4 : -50)}px;
    `}
`;

export function Loading({ isAnimation, hasScroll = false }) {
  return (
    <Container isAnimation={isAnimation} hasScroll={hasScroll}>
      {isAnimation ? (
        <Animation source={LoadingAnimation} autoPlay={true} loop={true} size={animationSize} />
      ) : (
        <ActivityIndicator />
      )}
    </Container>
  );
}
