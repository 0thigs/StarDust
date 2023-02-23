import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { css } from 'styled-components';

export const Animation = styled(LottieView)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  ${({ isAbsolute, top, left }) =>
    isAbsolute &&
    css`
      position: absolute;
      top: ${top}%;
      left: ${left}%;
      opacity: 0.7;
      z-index: -5;
    `}
`;
