import * as C from './styles';
import { ZoomIn, ZoomOut } from 'react-native-reanimated';

export function FabButton({ onPress, icon }) {
  return (
    <C.Container onPress={onPress} activeOpacity={0.7} entering={ZoomIn} exiting={ZoomOut}>
      {icon}
    </C.Container>
  );
}
