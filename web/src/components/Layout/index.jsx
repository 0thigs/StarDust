import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import * as C from './styles';

export default function Layout({ children }) {
  return (
    <C.Grid>
      <Header />
      <Sidebar />
      <C.Main>{children}</C.Main>
    </C.Grid>
  );
}
