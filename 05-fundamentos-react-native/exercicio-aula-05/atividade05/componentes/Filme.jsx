import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
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

const Filme = ({ nome, ano, diretor, tipo, capa }) => (
  <View style={styles.item}>
    <Image source={{ uri: capa }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.details}>Ano: {ano}</Text>
      <Text style={styles.details}>Diretor: {diretor}</Text>
      <Text style={styles.details}>Gênero: {tipo}</Text>
    </View>
  </View>
);

export default Filme;