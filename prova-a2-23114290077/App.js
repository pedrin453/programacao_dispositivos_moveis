import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator'; // Importa seu navegador principal

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppNavigator /> {/* Renderiza o componente que contém toda a navegação */}
      </NavigationContainer>
    </PaperProvider>
  );
}