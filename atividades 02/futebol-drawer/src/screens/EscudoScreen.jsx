import React from 'react';
import { View, Image, Text } from 'react-native';
import { Card } from 'react-native-paper';

const EscudoScreen = () => {
  return (
    <View style={{ padding: 16 }}>
      <Card>
        <Card.Title title="Flamengo" />
        <Card.Content>
          <Text>Fundação: 15 de novembro de 1895</Text>
          <Text>Estádio: Maracanã</Text>
          <Text>Mascote: Urubu</Text>
          <Text>Cores: Vermelho e Preto</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg' }} />
      </Card>
    </View>
  );
};

export default EscudoScreen;
