import { createContext, useState } from 'react';

export const DashboardContext = createContext();

const tables = [
  {
    name: 'Usuários',
    columns: [
      { name: 'nome', prop: 'name' },
      { name: 'e-mail', prop: 'email' },
      { name: 'poeira estelar', prop: 'coins' },
      { name: 'xp', prop: 'xp' },
      { name: 'foguete', prop: 'selected_rocket_id' },
      { name: 'ranking', prop: 'ranking_id' },
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
