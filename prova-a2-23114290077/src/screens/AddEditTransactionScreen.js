import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Appbar, TextInput, Button, RadioButton, Text } from 'react-native-paper';
import { addTransaction, updateTransaction } from '../data/AsyncStorageService';
import { MaskedTextInput } from 'react-native-mask-text';

function AddEditTransactionScreen({ navigation, route }) {
  const editingTransaction = route.params?.transaction || null;

  const [description, setDescription] = useState(editingTransaction?.description || '');
  const [amount, setAmount] = useState(editingTransaction?.amount ? String(editingTransaction.amount) : '');
  const [date, setDate] = useState(editingTransaction?.date || '');
  const [category, setCategory] = useState(editingTransaction?.category || '');
  const [type, setType] = useState(editingTransaction?.type || 'expense');

  useEffect(() => {
    if (editingTransaction) {
      navigation.setOptions({ title: 'Editar Transação' });
    } else {
      navigation.setOptions({ title: 'Adicionar Transação' });
    }
  }, [editingTransaction, navigation]);

  const validateInputs = () => {
    if (!description.trim() || !amount.trim() || !date.trim() || !category.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return false;
    }
    if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      Alert.alert('Erro', 'O valor deve ser um número positivo.');
      return false;
    }
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateRegex.test(date)) {
      Alert.alert('Erro', 'Formato de data inválido. Use DD/MM/AAAA.');
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateInputs()) {
      return;
    }

    const transactionData = {
      id: editingTransaction?.id,
      description: description.trim(),
      amount: parseFloat(amount),
      date: date.trim(),
      category: category.trim(),
      type: type,
    };

    try {
      if (editingTransaction) {
        await updateTransaction(transactionData);
        Alert.alert('Sucesso', 'Transação atualizada com sucesso!');
      } else {
        await addTransaction(transactionData);
        Alert.alert('Sucesso', 'Transação adicionada com sucesso!');
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao salvar a transação.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={editingTransaction ? 'Editar Transação' : 'Adicionar Transação'} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.content}>
        <TextInput
          label="Descrição"
          value={description}
          onChangeText={setDescription}
          mode="outlined"
          style={styles.input}
          placeholder="Ex: Compra de supermercado"
        />
        <TextInput
          label="Valor (R$)"
          value={amount}
          onChangeText={setAmount}
          mode="outlined"
          keyboardType="numeric"
          style={styles.input}
          placeholder="Ex: 50.00"
        />

        <MaskedTextInput
          mask="DD/MM/YYYY"
          onChangeText={(text, rawText) => setDate(text)}
          value={date}
          keyboardType="numeric"
          placeholder="DD/MM/AAAA"
          render={props => (
            <TextInput
              {...props}
              label="Data"
              mode="outlined"
              style={styles.input}
            />
          )}
        />
        <TextInput
          label="Categoria"
          value={category}
          onChangeText={setCategory}
          mode="outlined"
          style={styles.input}
          placeholder="Ex: Alimentação, Transporte, Salário"
        />

        <Text variant="titleSmall" style={styles.radioGroupTitle}>Tipo de Transação:</Text>
        <RadioButton.Group onValueChange={newValue => setType(newValue)} value={type}>
          <View style={styles.radioRow}>
            <RadioButton value="expense" />
            <Text>Despesa</Text>
          </View>
          <View style={styles.radioRow}>
            <RadioButton value="income" />
            <Text>Receita</Text>
          </View>
        </RadioButton.Group>

        <Button mode="contained" onPress={handleSave} style={styles.button}>
          {editingTransaction ? 'Atualizar Transação' : 'Adicionar Transação'}
        </Button>
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
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
  radioGroupTitle: {
    marginTop: 10,
    marginBottom: 5,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
  },
});

export default AddEditTransactionScreen;