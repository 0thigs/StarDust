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
import { ScrollProvider } from './src/contexts/ScrollContext';
import { EditorProvider } from './src/contexts/EditorContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ToastMenager from 'toastify-react-native';
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <LessonProvider>
            <ScrollProvider>
              <EditorProvider>
                <StatusBar style={'light'} backgroundColor={'transparent'} />
                {fontsLoaded && <Routes />}
              </EditorProvider>
            </ScrollProvider>
          </LessonProvider>
        </AuthContextProvider>
      </ThemeProvider>
      <ToastMenager
        animationInTiming={700}
        animationOutTiming={1000}
        animationStyle={'rightInOut'}
        width={320}
        position={'top'}
      />
    </GestureHandlerRootView>
  );
}
