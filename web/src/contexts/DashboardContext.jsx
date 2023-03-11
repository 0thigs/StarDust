import { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [currentTableName, setCurrentTableName] = useState('Estrelas');

  return (
    <DashboardContext.Provider value={{ currentTableName, setCurrentTableName }}>
      {children}
    </DashboardContext.Provider>
  );
};
