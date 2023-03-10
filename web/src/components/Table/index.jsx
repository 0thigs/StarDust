import { useEffect, useState } from 'react';
import { Command } from 'react-feather';
import api from '../../services/api';
import theme from '../../styles/theme';
import * as C from './styles';
const CDNURL =
  'https://aukqejqsiqsqowafpppb.supabase.co/storage/v1/object/public/images/rockets/rocket-2.svg';

export function Table({ table }) {
  const [images, setImages] = useState([]);
  const [entities, setEntities] = useState([]);
  const [data, setData] = useState([]);

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

    }
  }

  async function getData() {
    try {
      const { entity, columns } = table;

      const columnsList = columns.reduce(
        (list, currentColumn, index, array) =>
          list.concat(currentColumn.prop + (index + 1 !== array.length ? ', ' : '')),
        ''
      );

      const data = await api.getData(entity, columnsList);
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // getImages();
    getData();
  }, []);
  return (
    <C.Container>
      <C.THead>
        <tr>
          <th />
          {table.columns.map(({ name }) => (
            <th key={name}>{name}</th>
          ))}
          <th>ações</th>
        </tr>
      </C.THead>
      <C.TBody>
        <tr>
          <td>
            <Command size={20} color={theme.colors.green_300} />
          </td>
          <td>
            <img src="https://github.com/JohnPetros.png" alt="avatar" />
          </td>
          <td>John Petros</td>
          <td>john@email.com</td>
          <td>850</td>
          <td>550</td>
          <td>Editar</td>
          <td>Excluir</td>
        </tr>
      </C.TBody>
    </C.Container>
  );
}
