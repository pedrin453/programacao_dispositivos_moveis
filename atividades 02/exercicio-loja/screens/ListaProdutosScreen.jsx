import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(response => setProdutos(response.data.products))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Produto', { idProduto: item.id })}>
            <Card style={{ marginBottom: 10 }}>
              <Card.Title title={item.title} subtitle={`Preço: $${item.price}`} />
              <Card.Content>
                <Image source={{ uri: item.thumbnail }} style={{ width: '100%', height: 150, borderRadius: 8 }} />
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white',
    }
});
    