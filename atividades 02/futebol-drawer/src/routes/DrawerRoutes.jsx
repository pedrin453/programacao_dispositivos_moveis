import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import EscudoScreen from '../screens/EscudoScreen';
import JogadoresScreen from '../screens/JogadoresScreen';
import TitulosScreen from '../screens/TitulosScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="Escudo"
          component={EscudoScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="shield-outline" size={size} color={color} />
            )
          }}
        />
        <Drawer.Screen
          name="Jogadores"
          component={JogadoresScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="people-outline" size={size} color={color} />
            )
          }}
        />
        <Drawer.Screen
          name="Títulos"
          component={TitulosScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="trophy-outline" size={size} color={color} />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerRoutes;
