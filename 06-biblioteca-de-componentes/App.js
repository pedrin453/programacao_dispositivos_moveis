import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
     <View style={styles.container}>
      
      <StatusBar style="auto" />

      <Card>
        <Card.Content>
          <Title>Título do Card</Title>
          <Paragraph>Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer
            Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer
            Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer</Paragraph>
        </Card.Content>
      </Card>

     </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
