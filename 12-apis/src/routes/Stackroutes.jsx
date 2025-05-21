
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import HomeScreen from '../screens/HomeScreen'
import UsuarioScreen from '../screens/UsuarioScreen'

const Stack = createStackNavigator()


export default function Stackroutes() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name ='HomeScreen' component={HomeScreen} 
        options={{
            title: "Lista de Usuários",
            headerTitleAlign: 'center'
        }}/>

        <Stack.Screen name ='UsuarioScreen' component={UsuarioScreen} 
        name ='UsuarioScreen' component={UsuarioScreen} 
        options={{
            title: "usuarios",
            headerTitleAlign: 'center'
        }}/>
    </Stack.Navigator>
  )
}

