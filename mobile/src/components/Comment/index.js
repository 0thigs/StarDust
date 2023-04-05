import { UserAvatar } from '../UserAvatar';
import * as C from './styles';

export function Comment() {
  return (
    <C.Container>
      <UserAvatar avatar={'70273298-097e-4ed6-964f-11b7284436a8'} size={50} />
      <C.Info>
        <C.Header>
          <C.Username>John Petros</C.Username>
          <C.Date>3/2/2019</C.Date>
        </C.Header>
        <C.Body>NÃO! Independentemente se é verdadeiro ou não, ainda estamos em uma fria porque o foguete tem chances de explodir já que as quantidades de energia estão diferentes 😢.</C.Body>
      </C.Info>
    </C.Container>
  );
}
