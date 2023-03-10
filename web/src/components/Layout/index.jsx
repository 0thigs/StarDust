import { useDashboard } from '../../hooks/useDashboard';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import * as C from './styles';

export function Layout({ children }) {
  const { currentTableName } = useDashboard();

  return (
    <C.Grid>
      <Header table={currentTableName} />
      <Sidebar />
      <C.Main>{children}</C.Main>
    </C.Grid>
  );
}
