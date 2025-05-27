import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(response => setProduto(response.data))
      .catch(error => console.error(error));
  }, []);

  if (!produto) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      <Card>
        <Card.Title title={produto.title} subtitle={`Preço: $${produto.price}`} />
        <Card.Content>
          <Image source={{ uri: produto.thumbnail }} style={{ width: '100%', height: 200, borderRadius: 8 }} />
          <Text style={{ marginTop: 10 }}>{produto.description}</Text>
          <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Marca: {produto.brand}</Text>
          <Text style={{ marginTop: 5 }}>Categoria: {produto.category}</Text>
          <Text style={{ marginTop: 5 }}>Estoque: {produto.stock}</Text>
          <Text style={{ marginTop: 5 }}>Avaliação: {produto.rating} ⭐</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white',
    }
});
    