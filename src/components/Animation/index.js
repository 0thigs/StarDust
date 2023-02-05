import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { css } from 'styled-components';

export const Animation = styled(LottieView)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  ${props =>
    props.isAbsolute &&
    css`
      position: absolute;
      top: ${props.top}%;
      left: ${props.left}%;
      opacity: 0.7;
      z-index: -5;
    `}
`;
