import { react } from "react";
import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, View,  ScrollView   } from 'react-native';

export default function App() {
  // lógica do componente 
  
  const nome = "Pedro"

  function alerta() {
    alert("clicou no BOTÃO!!!!")    
  }
  
  // retorno dessa função com templete que vai ser
  // redenrizado na tela(jsx)
  return (
    <View style={styles.container}>
      <Text>Algum texto qualquer</Text>
      <Text>Hello</Text>
      <StatusBar style="auto" />
      <Button title='Enviar' onPress={alerta}></Button>
      <Image
  source={{
    uri: 'https://i.pinimg.com/736x/72/94/81/729481e77fb98f8f048a5a8c6059f6d1.jpg'
  }}
  style={{
    height: 300,
    width: 300
  }}
/>
      <Image
       source={require('./imagens/image.png')}
      />
    </View>
    </ScrollView>
  );
}

// estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});