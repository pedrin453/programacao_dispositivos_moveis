import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from'@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';

const tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
       <Tab.Navigator>
        <Tab.Screen name="Home Screen" component={HomeScreen} />
      
       </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

