import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { AuthContextProvider } from './src/contexts/AuthContext';
import { LessonProvider } from './src/contexts/LessonContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <LessonProvider>
          <StatusBar style={'light'} backgroundColor={'transparent'} />
          {fontsLoaded && <Routes />}
        </LessonProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
