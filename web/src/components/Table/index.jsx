import { useEffect, useState } from 'react';
import { Command } from 'react-feather';
import { Loading } from '../../components/Loading';
import api from '../../services/api';
import theme from '../../styles/theme';
import { Button } from '../Button';
import * as C from './styles';
const CDNURL =
  'https://aukqejqsiqsqowafpppb.supabase.co/storage/v1/object/public/images/rockets/rocket-2.svg';

export function Table({ table }) {
  const [images, setImages] = useState([]);
  const [entities, setEntities] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { entity, columns } = table;

  // async function getImages() {
  //   try {
  //     const images = await api.getImages();
  //     setImages(images);

  //     console.log(images[0]);
  //   } catch (errror) {
  //     console.log(errror);
  //   }
  // }

  async function getEntities() {
    try {
      const entities = await api.getImages();
      console.log();
    } catch (errror) {
      console.log(errror);
    } finally {
      setIsLoading(false);
    }
  }

  async function getData() {
    try {
      const columnsList = 'id, ' + columns.reduce(
        (list, currentColumn, index, array) =>
          list.concat(currentColumn.prop + (index + 1 !== array.length ? ', ' : '')),
        ''
      );

      const data = await api.getData(entity, columnsList);
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // getImages();
    getData();
  }, []);
  return (
    <C.Container>
      {isLoading ? (
        <Loading size={150} />
      ) : (
        <>
          <C.THead>
            <tr>
              <th />
              {columns.map(({ name }) => (
                <th key={name}>{name}</th>
              ))}
              <th colSpan={2}>ações</th>
            </tr>
          </C.THead>
          <C.TBody>
            {data.map(data => (
              <tr key={data}>
                <td>
                  <Command size={20} color={theme.colors.green_300} />
                </td>
                {columns.map(({ prop, isImage }) => (
                  <td>
                    {isImage ? (
                      <img src="https://github.com/JohnPetros.png" alt="avatar" />
                    ) : (
                      data[prop]
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
            ))}
          </C.TBody>
        </>
      )}
    </C.Container>
  );
}
