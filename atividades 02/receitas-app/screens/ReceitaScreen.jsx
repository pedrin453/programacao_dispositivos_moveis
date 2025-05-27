import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Text, Divider, List, Button } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { imagem, tempoPreparo, porcoes, ingredientes, modoPreparo } = route.params || {};

  if (!route.params) {
    return <Text variant="bodyMedium">Erro: Dados da receita não encontrados.</Text>;
  }

  return (
    <ScrollView style={{ padding: 16 }}>
      {imagem && (
        <Image
          source={{ uri: imagem }}
          style={{ height: 200, borderRadius: 8, marginBottom: 16 }}
        />
      )}
      <Text variant="titleLarge">Tempo de Preparo: {tempoPreparo}</Text>
      <Text variant="bodyMedium">Porções: {porcoes}</Text>

      <Divider style={{ marginVertical: 16 }} />

      <Text variant="titleLarge">Ingredientes</Text>
      {ingredientes.map((item, index) => (
        <List.Item key={index} title={item} left={() => <List.Icon icon="circle-small" />} />
      ))}

      <Divider style={{ marginVertical: 16 }} />

      <Text variant="titleLarge">Modo de Preparo</Text>
      {modoPreparo.map((passo, index) => (
        <Text key={index} variant="bodyMedium" style={{ marginBottom: 4 }}>
          {passo}
        </Text>
      ))}

      <Button
        mode="contained"
        style={{ marginTop: 24 }}
        onPress={() => navigation.goBack()}
      >
        Voltar
      </Button>
    </ScrollView>
  );
}
