import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { Command } from 'react-feather';
import { Loading } from '../../components/Loading';
import { Button } from '../Button';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import api from '../../services/api';
import theme from '../../styles/theme';
import * as C from './styles';
const CDNURL = 'https://aukqejqsiqsqowafpppb.supabase.co/storage/v1/object/public/images';

export function Table({ table }) {
  const { loggedUser } = useAuth();
  const [rows, setRows] = useState([]);
  const [relatedEntitiesData, setRelatedEntitiesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { entity, relatedEntities, columns } = table;

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
    if (relatedData) {
      return relatedEntitiesData[prop].find(data => data.id === id);
    }
  }

  function addOrdering(register, index) {
    const isAdmin = register.email === loggedUser.email;
    if (isAdmin) return;

    return { order: index + 1, ...register };
  }

  async function getRows() {
    try {
      const columnsList =
        'id, ' +
        columns.reduce(
          (list, currentColumn, index, array) =>
            list.concat(currentColumn.prop + (index + 1 !== array.length ? ', ' : '')),
          ''
        );

      const data = await api.getData(entity, columnsList);
      const rows = data.map(addOrdering);
      setRows(rows);

      if (!relatedEntitiesData.length) {
        getRelatedEntitiesData();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleDragEnd = event => {
    const { destination, source } = event;
    if (!destination) return;

    const reorderedRows = Array.from(rows);
    const [reorderedRow] = reorderedRows.splice(source.index, 1);

    reorderedRows.splice(destination.index, 0, reorderedRow);
    setRows(reorderedRows);
  };

  useEffect(() => {
    if (!rows.length) {
      getRows();
    }
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading size={150} />
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <C.Container>
            <C.THead>
              <tr>
                <th />
                {columns.map(({ name }) => (
                  <th key={name}>{name}</th>
                ))}
                <th colSpan={2}>ações</th>
              </tr>
            </C.THead>
            <Droppable droppableId="droppable-1">
              {provider => (
                <C.TBody ref={provider.innerRef} {...provider.droppableProps}>
                  {rows.map((row, index) => {
                    return (
                      <Draggable key={row.id} draggableId={row.id} index={index}>
                        {provider => (
                          <tr {...provider.draggableProps} ref={provider.innerRef}>
                            <td {...provider.dragHandleProps}>
                              <Command size={20} color={theme.colors.green_300} />
                              <span className="order">{row.order}</span>
                            </td>
                            {columns.map(({ prop, isImage }) => (
                              <td key={prop}>
                                {relatedEntities.some(
                                  relatedEntity => relatedEntity.prop === prop
                                ) ? (
                                  <img
                                    src={`${CDNURL}/${getRelatedEntityName(prop)}/${
                                      getRelatedData(prop, row[prop])?.image
                                    }`}
                                    alt={`imagem referente à coluna ${getRelatedEntityName(prop)}`}
                                  />
                                ) : isImage ? (
                                  <img src="https://github.com/JohnPetros.png" alt="avatar" />
                                ) : (
                                  row[prop]
                                )}
                              </td>
                            ))}
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
                        )}
                      </Draggable>
                    );
                  })}
                  {provider.placeholder}
                </C.TBody>
              )}
            </Droppable>
          </C.Container>
        </DragDropContext>
      )}
    </>
  );
}
