import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Text, ActivityIndicator } from 'react-native-paper';
import { getTransactions } from '../data/AsyncStorageService';
import { useFocusEffect } from '@react-navigation/native';

function DashboardScreen() {
  const [balance, setBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [loading, setLoading] = useState(true);

  const calculateFinancialSummary = async () => {
    setLoading(true);
    const transactions = await getTransactions();
    let income = 0;
    let expense = 0;

    transactions.forEach(t => {
      if (t.type === 'income') {
        income += parseFloat(t.amount || 0);
      } else {
        expense += parseFloat(t.amount || 0);
      }
    });

    setTotalIncome(income);
    setTotalExpense(expense);
    setBalance(income - expense);
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      calculateFinancialSummary();
    }, [])
  );

  const balanceColor = balance >= 0 ? '#4CAF50' : '#F44336';

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Resumo Financeiro" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.content}>
        {loading ? (
          <ActivityIndicator animating={true} color="#2196F3" size="large" style={styles.activityIndicator} />
        ) : (
          <>
            <Card style={styles.summaryCard}>
              <Card.Content style={styles.cardContent}>
                <Text variant="titleLarge" style={styles.cardTitle}>Saldo Atual</Text>
                <Text variant="displaySmall" style={[styles.balanceText, { color: balanceColor }]}>
                  R$ {balance.toFixed(2)}
                </Text>
              </Card.Content>
            </Card>

            <Card style={styles.summaryCard}>
              <Card.Content style={styles.cardContent}>
                <Text variant="titleMedium" style={styles.cardTitle}>Receitas Totais</Text>
                <Text variant="headlineMedium" style={{ color: '#4CAF50' }}>
                  R$ {totalIncome.toFixed(2)}
                </Text>
              </Card.Content>
            </Card>

            <Card style={styles.summaryCard}>
              <Card.Content style={styles.cardContent}>
                <Text variant="titleMedium" style={styles.cardTitle}>Despesas Totais</Text>
                <Text variant="headlineMedium" style={{ color: '#F44336' }}>
                  R$ {totalExpense.toFixed(2)}
                </Text>
              </Card.Content>
            </Card>
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  content: {
    padding: 16,
  },
  summaryCard: {
    marginBottom: 16,
    elevation: 3,
  },
  cardContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  cardTitle: {
    marginBottom: 10,
    color: '#616161',
  },
  balanceText: {
    fontWeight: 'bold',
  },
  activityIndicator: {
    marginTop: 50,
  },
});

export default DashboardScreen;