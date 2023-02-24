import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Challenges } from '../screens/Challenges';
import { Profile } from "../screens/Profile";
import { Shop } from "../screens/Shop";
import { Ranking } from '../screens/Ranking';

import { MenuHamburguer } from '../components/MenuHamburguer';
import { HeaderStatus } from '../components/HeaderStatus';
import { CustomTabBar } from '../components/CustomTabBar';
import theme from '../global/styles/theme';

const Tab = createBottomTabNavigator();

export function TabRoutes({ navigation }) {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        title: 'StarDust',
        headerStyle: {
          backgroundColor: theme.colors.background,
          borderBottomColor: theme.colors.green_500,
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => <MenuHamburguer navigationProps={navigation} />,
        headerRight: () => <HeaderStatus />,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Challenges" component={Challenges} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Ranking" component={Ranking} />
    </Tab.Navigator>
  );
}
    