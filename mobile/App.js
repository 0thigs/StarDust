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
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

import { AuthContextProvider } from './src/contexts/AuthContext';
import { LessonProvider } from './src/contexts/LessonContext';
import { ChallengeProvider } from './src/contexts/ChallengeContext';
import { ScrollProvider } from './src/contexts/ScrollContext';

import './src/libs/dayjs';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <LessonProvider>
          <ChallengeProvider>
            <ScrollProvider>
              <StatusBar style={'light'} backgroundColor={'transparent'} />
              {fontsLoaded && <Routes />}
            </ScrollProvider>
          </ChallengeProvider>
        </LessonProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
