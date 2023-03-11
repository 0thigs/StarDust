import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { Loading } from '../../components/Loading';
import { Button } from '../Button';

import api from '../../services/api';
import theme from '../../styles/theme';
import * as C from './styles';
const CDNURL = 'https://aukqejqsiqsqowafpppb.supabase.co/storage/v1/object/public/images';

export function Table({ table }) {
  const { loggedUser } = useAuth();
  const [rows, setRows] = useState([]);
  const [relatedEntitiesData, setRelatedEntitiesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { entity, relatedEntities, boolValues, columns } = table;

  async function getRelatedEntitiesData() {
    try {
      for (const entity of relatedEntities) {
        const data = await api.getData(entity.name, 'id, name, image');
        setRelatedEntitiesData(relatedData => ({ ...relatedData, [entity.prop]: [...data] }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  function getRelatedEntityName(prop) {
    return relatedEntities.find(relatedEntity => relatedEntity.prop === prop)?.name;
  }

  function getRelatedData(prop, id) {
    const relatedData = relatedEntitiesData[prop];
    console.log({relatedData});
    if (relatedData) {
      return relatedData.find(data => data.id === id);
    }
  }

  function hasRelatedEntity(prop) {
    if (relatedEntities && relatedEntities.length) {
      return relatedEntities?.some(relatedEntity => relatedEntity.prop === prop);
    }
  }

  async function getRows() {
    try {
      const columnsList =
        'id, ' +
        columns.reduce(
          (list, currentColumn, index, array) =>
            list.concat(currentColumn.prop + (index + 1 !== array.length ? ', ' : '')),
          entity === 'users' ? 'isAdmin, ' : ''
        );

      const rows = await api.getData(entity, columnsList);
      setRows(columnsList.includes('isAdmin') ? rows.filter(row => !row.isAdmin) : rows);

      getRelatedEntitiesData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getRows();
  }, [table]);

  return (
    <>
      {isLoading ? (
        <Loading size={150} />
      ) : (
        <C.Container>
          <C.THead>
            <tr>
              {columns.map(({ name }) => (
                <th key={name}>{name}</th>
              ))}
              <th colSpan={2}>ações</th>
            </tr>
          </C.THead>
          <C.TBody>
            {rows.map(row => {
              return (
                <tr key={row.id}>
                  {columns.map(({ prop, isImage }) => {
                    const data = row[prop];
                    return (
                      <td key={prop} className={typeof data === 'number' ? 'number' : ''}>
                        {hasRelatedEntity(prop) ? (
                          <img
                            src={`${CDNURL}/${getRelatedEntityName(prop)}/${
                              getRelatedData(prop, data)?.image
                            }`}
                            alt={`imagem referente à coluna ${getRelatedEntityName(prop)}`}
                          />
                        ) : isImage ? (
                          <img src="https://github.com/JohnPetros.png" alt="avatar" />
                        ) : typeof data === 'boolean' ? (
                          boolValues[Number(data)]
                        ) : (
                          <div>{data}</div>
                        )}
                      </td>
                    );
                  })}
                  <td className="action-button">
                    <Button
                      title={'Editar'}
                      background={theme.colors.blue_300}
                      color={theme.colors.black}
                      isSmall={true}
                    />
                  </td>
                  <td className="action-button">
                    <Button
                      title={'Excluir'}
                      background={theme.colors.red_700}
                      color={theme.colors.white}
                      isSmall={true}
                    />
                  </td>
                </tr>
              );
            })}
          </C.TBody>
        </C.Container>
      )}
    </>
  );
}
