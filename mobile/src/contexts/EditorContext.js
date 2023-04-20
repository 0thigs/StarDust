import { createContext, useEffect, useState } from 'react';

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(12);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    console.log({ isDarkMode });
  }, []);

  return (
    <EditorContext.Provider value={{ fontSize, setFontSize, isDarkMode, setIsDarkMode }}>
      {children}
    </EditorContext.Provider>
  );
};
