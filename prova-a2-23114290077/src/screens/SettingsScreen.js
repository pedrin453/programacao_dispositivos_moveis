import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, Button } from 'react-native-paper';

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Configurações" />
      </Appbar.Header>
      <View style={styles.content}>
        <Text variant="headlineMedium">Tela de Configurações</Text>
        <Text variant="bodyLarge" style={styles.text}>
          Aqui você pode adicionar opções de configuração para o seu aplicativo.
        </Text>
        <Button mode="contained" onPress={() => navigation.goBack()} style={styles.button}>
          Voltar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    marginTop: 30,
  },
});

export default SettingsScreen;