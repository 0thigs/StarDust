import { createContext, useState } from 'react';

export const DashboardContext = createContext();

const tables = [
  {
    name: 'Usuários',
    columns: [
      {
        name: 'avatar',
        prop: 'avatar',
        isImage: true,
      },
      {
        name: 'nome',
        prop: 'name',
        isImage: false,
      },
      {
        name: 'e-mail',
        prop: 'email',
        isImage: false,
      },
      {
        name: 'poeira estelar',
        prop: 'coins',
        isImage: false,
      },
      {
        name: 'xp',
        prop: 'xp',
        isImage: false,
      },
      {
        name: 'foguete',
        prop: 'selected_rocket_id',
        isImage: false,
      },
      {
        name: 'ranking',
        prop: 'ranking_id',
        isImage: false,
      },
    ],
    entity: 'users',
    relatedEntities: ['rockets', 'rankings'],
  },
];

export const DashboardProvider = ({ children }) => {
  const [currentTableName, setCurrentTableName] = useState('Usuários');

  return (
    <DashboardContext.Provider value={{ currentTableName, setCurrentTableName, tables }}>
      {children}
    </DashboardContext.Provider>
  );
};
