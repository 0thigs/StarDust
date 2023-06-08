import * as C from './styles';

export function FabButton({ animatedStyle, onPress, icon }) {
  return (
    <C.Container style={animatedStyle} onPress={onPress} activeOpacity={0.7}>
      {icon}
    </C.Container>
  );
}
