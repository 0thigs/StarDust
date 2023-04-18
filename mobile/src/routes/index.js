import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
import { View } from 'react-native';
import theme from '../global/styles/theme';

export function Routes() {
  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </View>
  );
}
