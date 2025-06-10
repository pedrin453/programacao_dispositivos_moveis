import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

const CurrencyCard = ({ currencyName, buyPrice, sellPrice, change }) => {
  const changeColor = change >= 0 ? '#4CAF50' : '#F44336';

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleMedium" style={styles.currencyName}>{currencyName}</Text>
        <View style={styles.row}>
          <Text variant="bodyMedium">Compra:</Text>
          <Text variant="bodyLarge">R$ {parseFloat(buyPrice).toFixed(4)}</Text>
        </View>
        <View style={styles.row}>
          <Text variant="bodyMedium">Venda:</Text>
          <Text variant="bodyLarge">R$ {parseFloat(sellPrice).toFixed(4)}</Text>
        </View>
        <View style={styles.row}>
          <Text variant="bodyMedium">Variação (24h):</Text>
          <Text variant="bodyLarge" style={{ color: changeColor }}>
            {parseFloat(change).toFixed(2)}%
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
  },
  currencyName: {
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
});

export default CurrencyCard;