import { NavigationContainer, getStateFromPath } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
import { View } from 'react-native';
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
  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <NavigationContainer linking={linking}>
        <StackRoutes />
      </NavigationContainer>
    </View>
  );
}
