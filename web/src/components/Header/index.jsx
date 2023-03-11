import { useAuth } from '../../hooks/useAuth';
import * as C from './styles';

export function Header({ table }) {
  const { loggedUser } = useAuth();
  return (
    <C.Container>
      <h1>{table}</h1>
      <C.Admin>
        <div>
          <strong>{loggedUser.name}</strong>
          <small>{loggedUser.email}</small>
        </div>
        <img src="https://github.com/JohnPetros.png" alt="Avatar do admin" />
      </C.Admin>
    </C.Container>
  );
}
