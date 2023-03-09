import { useAuth } from '../../../hooks/useAuth';

export function Home() {
  const { loggedUser, signOut } = useAuth();

  function handleLogout() {
    try {
      signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      Home
      <button onClick={handleLogout}></button>
    </div>
  );
}
