import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

import { TabRoutes } from './tab.routes';

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="TabRoutes" component={TabRoutes} />
    </Drawer.Navigator>
  );
}
