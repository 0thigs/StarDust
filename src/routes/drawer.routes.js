import { createDrawerNavigator } from '@react-navigation/drawer';
import { useEffect } from 'react';
import { CustomDrawer } from '../components/CustomDrawer';
import { userId } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';
import { TabRoutes } from './tabs.routes';
import api from '../services/api';

const Drawer = createDrawerNavigator();

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
