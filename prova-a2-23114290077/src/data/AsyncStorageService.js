import AsyncStorage from '@react-native-async-storage/async-storage';

const TRANSACTIONS_KEY = '@financasApp:transactions';

export const getTransactions = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TRANSACTIONS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Erro ao ler transações do AsyncStorage', e);
    return [];
  }
};

export const saveTransactions = async (transactions) => {
  try {
    const jsonValue = JSON.stringify(transactions);
    await AsyncStorage.setItem(TRANSACTIONS_KEY, jsonValue);
  } catch (e) {
    console.error('Erro ao salvar transações no AsyncStorage', e);
  }
};

export const addTransaction = async (newTransaction) => {
  const transactions = await getTransactions();
  newTransaction.id = Date.now().toString();
  const updatedTransactions = [...transactions, newTransaction];
  await saveTransactions(updatedTransactions);
  return newTransaction;
};

export const updateTransaction = async (updatedTransaction) => {
  const transactions = await getTransactions();
  const updatedTransactions = transactions.map(t =>
    t.id === updatedTransaction.id ? updatedTransaction : t
  );
  await saveTransactions(updatedTransactions);
};

export const deleteTransaction = async (id) => {
  const transactions = await getTransactions();
  const updatedTransactions = transactions.filter(t => t.id !== id);
  await saveTransactions(updatedTransactions);
};
