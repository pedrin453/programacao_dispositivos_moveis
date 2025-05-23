import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => setCategorias(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Produtos', { categoria: item })}>
            <Card style={{ marginBottom: 10 }}>
              <Card.Title title={item.toUpperCase()} />
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
    