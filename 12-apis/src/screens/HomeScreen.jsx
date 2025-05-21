import { StyleSheet, Text, View } from 'react-native'
import { Text } from 'react-native-paper';
import {Card, Avatar, Text} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';


export default function HomeScreen() {

  const {usuarios, setUsuarios} = useState([])
  
  useEffect(() => {
    // tudo que o usuario pode fazer o entrar na tela
    alert('Componente Montado')


    axios.get('https://dummyjson.com/users')
    .then(resposta => {
      console.log(resposta.data.users)
      setUsuarios(resposta.data.users)
    })
    .catch(erro => {
      console.log(erro)
    })
     
  }, [])
  
  
  
  return (
  
  <View style={styles.container}>

    <FlatList 
     data={usuarios};
     renderItem{({Item}) => (
      <Card>
       <CardTitle 
        title={item=firstName + " " + item=lastName }
        subtitle={item.email}
        
       />
      </Card>
     )}
    />


    </View>
    


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
