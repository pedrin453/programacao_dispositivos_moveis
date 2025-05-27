import 'react-native-gesture-handler'; // Import obrigatoriamente no topo
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import DrawerRoutes from './src/routes/DrawerRoutes';

export default function App() {
  return (
    <PaperProvider>
      <DrawerRoutes />
    </PaperProvider>
  );
}
