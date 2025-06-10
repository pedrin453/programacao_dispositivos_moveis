import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';

const TransactionCard = ({ transaction, onEdit, onDelete }) => {
  const isExpense = transaction.type === 'expense';
  const amountColor = isExpense ? '#F44336' : '#4CAF50'; // Colors.red500 / Colors.green500

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.contentRow}>
          <View style={styles.infoColumn}>
            <Text variant="titleMedium">{transaction.description}</Text>
            <Text variant="bodySmall" style={styles.categoryText}>
              {transaction.category} - {transaction.date}
            </Text>
          </View>
          <View style={styles.amountColumn}>
            <Text variant="titleMedium" style={{ color: amountColor }}>
              {isExpense ? '- ' : '+ '}R$ {parseFloat(transaction.amount).toFixed(2)}
            </Text>
          </View>
        </View>
        <View style={styles.actionsRow}>
          <IconButton
            icon="pencil"
            color="#2196F3" // Colors.blue500
            size={20}
            onPress={() => onEdit(transaction)}
          />
          <IconButton
            icon="delete"
            color="#F44336" // Colors.red500
            size={20}
            onPress={() => onDelete(transaction.id)}
          />
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
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoColumn: {
    flex: 1,
  },
  amountColumn: {
    marginLeft: 10,
    alignItems: 'flex-end',
  },
  categoryText: {
    color: '#757575', // Colors.grey600
    marginTop: 4,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});

export default TransactionCard;