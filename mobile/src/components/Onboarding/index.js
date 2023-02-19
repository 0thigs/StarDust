import { useWindowDimensions } from 'react-native';
import * as C from './styles';

export function Onboarding({ component }) {
  const { width } = useWindowDimensions();

  return <C.Container style={{ width }}>{component}</C.Container>;
}
