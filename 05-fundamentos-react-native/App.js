import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponentes from './componentes/PrimeiroComponentes';
import JavascriptComponente from './componentes/JavascriptComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


    
      <PrimeiroComponentes />
      <JavascriptComponente />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
