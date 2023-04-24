import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(12);
  const [isDarkMode, setIsDarkMode] = useState(true);

  async function storeData() {
    try {
      await AsyncStorage.setItem('@stardust:editor', JSON.stringify({ fontSize, isDarkMode }));
    } catch (error) {
      console.error(error);
    }
  }

  async function getEditorStoredData() {
    try {
      const editor = JSON.parse(await AsyncStorage.getItem('@stardust:editor')) ?? {
        isDarkMode: true,
        fontSize: 12,
      };
      setIsDarkMode(editor.isDarkMode);
      setFontSize(editor.fontSize);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getEditorStoredData();
  }, []);

  useEffect(() => {
    storeData();
  }, [fontSize, isDarkMode]);

  return (
    <EditorContext.Provider value={{ fontSize, setFontSize, isDarkMode, setIsDarkMode }}>
      {children}
    </EditorContext.Provider>
  );
};
