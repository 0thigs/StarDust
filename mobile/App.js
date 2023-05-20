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
import { AuthProvider } from './src/contexts/AuthContext';
import { ConfigProvider } from './src/contexts/ConfigContext';
import { LessonProvider } from './src/contexts/LessonContext';
import { ScrollProvider } from './src/contexts/ScrollContext';
import { EditorProvider } from './src/contexts/EditorContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { default as Toast } from 'toastify-react-native';
import './src/libs/dayjs';
const { width } = Dimensions.get('screen');

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
        <AuthProvider>
          <ConfigProvider>
            <LessonProvider>
              <ScrollProvider>
                <EditorProvider>
                  <StatusBar style={'light'} backgroundColor={'transparent'} />
                  {fontsLoaded && <Routes />}
                </EditorProvider>
              </ScrollProvider>
            </LessonProvider>
          </ConfigProvider>
        </AuthProvider>
      </ThemeProvider>
      <Toast
        animationInTiming={700}
        animationOutTiming={1000}
        animationStyle={'rightInOut'}
        width={width * 0.9}
        position={'top'}
      />
    </GestureHandlerRootView>
  );
}
