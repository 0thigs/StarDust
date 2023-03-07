import * as C from './styles'

export function Button({ title, onClick, isLoading, color, background }) {
  return (
    <C.Container onClick={onClick} background={background} color={color}>
      {title}
    </C.Container>
  );
}
