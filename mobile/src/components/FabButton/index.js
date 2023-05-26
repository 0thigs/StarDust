import { useEffect } from 'react';
import * as C from './styles';
import { ZoomIn, ZoomOut } from 'react-native-reanimated';

export function FabButton({ animatedStyle, onPress, icon }) {
  return (
    <C.Container
      style={animatedStyle}
      onPress={onPress}
      activeOpacity={0.7}
    //   entering={ZoomIn}
    //   exiting={ZoomOut}
    >
      {icon}
    </C.Container>
  );
}
