import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DashboardScreen from '../screens/DashboardScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import AddEditTransactionScreen from '../screens/AddEditTransactionScreen';
import CurrenciesScreen from '../screens/CurrenciesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="ResumoFinanceiro"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen
        name="ResumoFinanceiro"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Resumo',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-line" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MinhasTransacoes"
        component={TransactionsScreen}
        options={{
          tabBarLabel: 'Transações',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CotacoesMoedas"
        component={CurrenciesScreen}
        options={{
          tabBarLabel: 'Moedas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="currency-usd" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Configuracoes"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="AbasPrincipais">
      <Stack.Screen
        name="AbasPrincipais"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdicionarEditarTransacao"
        component={AddEditTransactionScreen}
        options={{ title: 'Adicionar/Editar Transação' }}
      />
    </Stack.Navigator>
  );
}
