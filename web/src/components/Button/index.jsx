import * as C from './styles'

export function Button({ title, onPress, isLoading, color, background }) {
  return (
    <C.Container onPress={onPress} background={background} color={color}>
      {title}
    </C.Container>
  );
}
