import React from 'react';
import { FlatList, Image, View, Text } from 'react-native';
import { Card } from 'react-native-paper';

const jogadores = [
  {
    nome: "Gabriel Barbosa",
    numero: 9,
    posicao: "Atacante",
    idade: 27,
    imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
  },
  {
    nome: "Arrascaeta",
    numero: 14,
    posicao: "Meia",
    idade: 29,
    imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
  }
  // ...adicione os outros
];

const JogadoresScreen = () => {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.numero.toString()}
      renderItem={({ item }) => (
        <Card style={{ margin: 10 }}>
          <Card.Title title={item.nome} subtitle={item.posicao} />
          <Card.Cover source={{ uri: item.imagem }} />
          <Card.Content>
            <Text>Número: {item.numero}</Text>
            <Text>Idade: {item.idade}</Text>
          </Card.Content>
        </Card>
      )}
    />
  );
};

export default JogadoresScreen;
