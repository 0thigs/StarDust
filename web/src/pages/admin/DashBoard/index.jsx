import { useDashboard } from '../../../hooks/useDashboard';
import { Plus, Filter } from 'react-feather';
import { Layout } from '../../../components/Layout';
import { Button } from '../../../components/Button';
import { Table } from '../../../components/Table';
import { tables } from '../../../utils/tables';
import theme from '../../../styles/theme';
import * as C from './styles';
import { useEffect, useState } from 'react';
const iconColor = theme.colors.green_500;
const iconSize = 24;

export function Dashboard() {
  const { currentTableName } = useDashboard();
  const [currentTable, setCurrentTable] = useState([]);

  useEffect(() => {
    setCurrentTable(tables.find(table => table.name === currentTableName));
    getTitle();
  }, [currentTableName]);

  function handleNewEntity() {}

  function handleFilter() {}

  function getTitle() {
    const title = currentTableName.slice(0, currentTableName.length - 1);
    return (title[title.length - 1] === 'a' ? 'Nova ' : 'Novo ') + title;
  }

  return (
    <Layout>
      <C.Container>
        <C.Header>
          <C.Box>
            <C.Icon>
              <Plus color={iconColor} size={iconSize} />
            </C.Icon>
            <Button
              title={getTitle()}
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

        <Table table={currentTable} />
      </C.Container>
    </Layout>
  );
}
