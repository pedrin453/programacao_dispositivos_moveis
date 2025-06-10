import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Appbar, Text, ActivityIndicator } from 'react-native-paper';
import { getCurrencyRates } from '../services/ApiService';
import CurrencyCard from '../components/CurrencyCard';
import { useFocusEffect } from '@react-navigation/native';

function CurrenciesScreen() {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchRates = async () => {
    setLoading(true);
    const data = await getCurrencyRates();
    if (data) {
      const relevantRates = [
        data.USD, data.EUR, data.BTC, data.JPY, data.GBP
      ].filter(Boolean).map(item => ({
        id: item.code,
        name: `${item.name} (${item.code})`,
        buy: item.bid,
        sell: item.ask,
        pctChange: item.pctChange,
      }));
      setRates(relevantRates);
    }
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchRates();
    }, [])
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchRates();
    setRefreshing(false);
  }, []);

  if (loading && !refreshing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} color="#2196F3" size="large" />
        <Text style={styles.loadingText}>Carregando cotações...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Cotações de Moedas" />
      </Appbar.Header>
      {rates.length === 0 && !loading ? (
        <View style={styles.emptyContainer}>
          <Text variant="headlineSmall" style={styles.emptyText}>
            Não foi possível carregar as cotações.
          </Text>
          <Text variant="bodyMedium">Verifique sua conexão com a internet.</Text>
        </View>
      ) : (
        <FlatList
          data={rates}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CurrencyCard
              currencyName={item.name}
              buyPrice={item.buy}
              sellPrice={item.sell}
              change={item.pctChange}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#616161',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#888',
  },
});

export default CurrenciesScreen;