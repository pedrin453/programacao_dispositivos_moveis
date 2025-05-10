import { createDrawerNavigator } from 'react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ConfigScreen from '../screens/ConfigScreen'

const Drawer = createDrawerNavigator()


export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>

        <Drawer.Screen name = 'HomeScreen' component={HomeScreen}/>
        
        <Drawer.Screen name = 'ProfileScreen' component={ProfileScreen} />

        <Drawer.Screen name = 'ConfigScreen' component={ConfigScreen} />


        
    </Drawer.Navigator>
  )
}

