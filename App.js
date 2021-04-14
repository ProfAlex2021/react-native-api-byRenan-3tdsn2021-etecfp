import React, { useState } from 'react';
import { StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import api from './src/services/api'

export default function App() {

  const [nome, setNome] = useState('teste');
  const [idade, setIdade] = useState('123');

  function cadastro() {
    let dados = {
      texto:nome,
      numero:Number(idade)
    }
    let formData = new FormData()
    formData.append('dados', JSON.stringify(dados))
    api.post('/api/pessoa/', formData)
    .then((r) =>{
      console.log(r)
      alert(r)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="Seu Nome..." style={styles.textInput} onChangeText={setNome} value={nome} />
      <TextInput placeholder="Sua idade..." style={styles.textInput} onChangeText={setIdade} keyboardType="number-pad" value={idade} />
      <Button onPress={() => cadastro()} title="CADASTRO" color="#841584" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textInput: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10
  }
});
