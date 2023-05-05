import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { View } from 'react-native';
import { NavigationContainer, getStateFromPath } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { Loading } from '../components/Loading';
import theme from '../global/styles/theme';

const linking = {
  prefixes: ['exp://192.168.1.11:19000/--/stardust'],
  config: {
    screens: {
      change_password: {
        path: 'change_password/:isEmailVerified',
      },
    },
  },
  getStateFromPath: (path, options) => {
    const accessiblePath = path.replace('#', '?');

    return getStateFromPath(accessiblePath, options);
  },
};

export function Routes() {
  const { setUserInSession, loggedUser, isLoading } = useAuth();

  function isUserLogged() {
    return Object.entries(loggedUser).length;
  }

  async function verifySession() {
    try {
      await setUserInSession();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    verifySession();
  }, []);

  if (isLoading) return <Loading isAnimation={true} />;

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <NavigationContainer linking={linking}>
        {isUserLogged() ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}
