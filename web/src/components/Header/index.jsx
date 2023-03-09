import * as C from './styles';

export function Header() {
  return (
    <C.Container>
      <h1>Usuários</h1>
      <C.Admin>
        <div>
          <strong>John Admin</strong>
          <small>admin@stardust.com</small>
        </div>
        <img src="https://github.com/JohnPetros.png" alt="Avatar do admin" />
      </C.Admin>
    </C.Container>
  );
}
