import { useDashboard } from '../../../hooks/useDashboard';
import { Plus, Filter } from 'react-feather';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/Button';
import { Table } from '../../../components/Table';
import theme from '../../../styles/theme';
import * as C from './styles';
const iconColor = theme.colors.green_500;
const iconSize = 24;

export function Dashboard() {
  const { currentTableName, tables } = useDashboard();

  function handleNewEntity() {}

  function handleFilter() {}

  return (
    <Layout>
      <C.Header>
        <C.Box>
          <C.Icon>
            <Plus color={iconColor} size={iconSize} />
          </C.Icon>
          <Button
            title={'Novo usuário'}
            background={theme.colors.green_300}
            color={theme.colors.black}
            onClick={handleNewEntity}
          />
        </C.Box>
        <C.Box>
          <C.Icon>
            <Filter color={iconColor} size={iconSize} />
          </C.Icon>
          <C.Search placeholder={'nome'} />
          <Button
            title={'Filtrar'}
            background={theme.colors.green_300}
            color={theme.colors.black}
            onClick={handleFilter}
          />
        </C.Box>
      </C.Header>

      <Table table={tables.find(table => (table.name = currentTableName))} />
    </Layout>
  );
}
