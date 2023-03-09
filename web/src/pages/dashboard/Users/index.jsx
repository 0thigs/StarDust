import { useAuth } from '../../../hooks/useAuth';

export function Users() {
  const { loggedUser, signOut } = useAuth();

  //  async function verifySection() {
  //   try {
  //     const user = await getUserInSession();
  //     console.log(user);
  //     console.log(user.isAdmin);
  //     if (!user) {
  //       location.href = '/';
  //     }
  //     if (!user.isAdmin) {
  //       navigate('/error');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   verifySection();
  // }, []);

  function handleLogout() {
    try {
      signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      Admin
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
