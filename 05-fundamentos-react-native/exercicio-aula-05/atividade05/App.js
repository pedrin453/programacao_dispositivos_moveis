import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Filme from './componentes/Filme';
import Serie from './componentes/Serie';

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

const App = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.header}>Filmes</Text>
    {listaFilmes.map((filme, index) => (
      <Filme key={index} {...filme} />
    ))}
    <Text style={styles.header}>Séries</Text>
    {listaSeries.map((serie, index) => (
      <Serie key={index} {...serie} />
    ))}
  </ScrollView>
);

export default App;