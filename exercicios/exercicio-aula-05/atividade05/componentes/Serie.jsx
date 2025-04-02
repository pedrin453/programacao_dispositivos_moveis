import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>...</Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    item: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    image: {
      width: 100,
      height: 150,
      marginRight: 10,
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    details: {
      fontSize: 14,
      color: '#666',
    },
  });