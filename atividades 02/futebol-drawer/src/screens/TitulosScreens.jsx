import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { List } from 'react-native-paper';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022]
  }
  // ...adicione os outros
];

const TitulosScreen = () => {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <List.Section>
          <List.Subheader>{item.nome}</List.Subheader>
          {item.anos.map((ano, index) => (
            <List.Item key={index} title={ano.toString()} left={() => <List.Icon icon="trophy" />} />
          ))}
        </List.Section>
      )}
    />
  );
};

export default TitulosScreen;
