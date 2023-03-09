import Layout from '../../../components/Layout';
import { useAuth } from '../../../hooks/useAuth';

export function Users() {
  const { loggedUser, signOut } = useAuth();

  function handleLogout() {
    try {
      signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      Admin
      <button onClick={handleLogout}>Sair</button>
    </Layout>
  );
}
