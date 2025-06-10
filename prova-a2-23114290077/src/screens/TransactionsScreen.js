import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { Appbar, FAB, Text, Button } from 'react-native-paper';
import TransactionCard from '../components/TransactionCard';
import { getTransactions, deleteTransaction } from '../data/AsyncStorageService';
import { useFocusEffect } from '@react-navigation/native';

function TransactionsScreen({ navigation }) {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTransactions = async () => {
    setLoading(true);
    const data = await getTransactions();
    setTransactions(data);
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  const handleDelete = (id) => {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir esta transação?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: async () => {
            await deleteTransaction(id);
            loadTransactions();
          },
          style: "destructive",
        },
      ]
    );
  };

  const handleEdit = (transaction) => {
    navigation.navigate('AdicionarEditarTransacao', { transaction });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando transações...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Transações" />
      </Appbar.Header>

      {transactions.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text variant="headlineSmall" style={styles.emptyText}>
            Nenhuma transação registrada ainda.
          </Text>
          <Button mode="contained" onPress={() => navigation.navigate('AdicionarEditarTransacao')}>
            Adicionar Transação
          </Button>
        </View>
      ) : (
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionCard
              transaction={item}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('AdicionarEditarTransacao')}
      />
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
  listContent: {
    paddingBottom: 80,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#888',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6200EE',
  },
});

export default TransactionsScreen;