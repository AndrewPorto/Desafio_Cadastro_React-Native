import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import Slider from '@react-native-community/slider';



export default function App() {
  const [nome, setNome ] = useState('');
  const [idade, setIdade ] = useState('');
  const [sexoSelecionado, setSexoSelecionado] = useState(0)
  const [sexo, setSexo ] = useState([
    {id: 1, sexo: 'Masculino'},
    {id: 2, sexo: 'Feminino'},
  ]);
  const [valor, setValor ] = useState(1000);
  const [estudante, setEstudante] = useState(false)

  let sexoItem = sexo.map( ( v, k) => {
    return <Picker.Item key={k} value={k} label={v.sexo} />
   } )
  
  function cadastro() {
    if(nome === '' || idade === '' ){
      alert('Preencha todos os dados')
      return
    } else {
     alert('Cadastro feito com sucesso \n' + 'Nome: ' + nome + '\n' +
    'Idade: ' + idade + '\n' + 
    'Sexo: ' + sexo[sexoSelecionado].sexo + '\n' +
    'Limite: ' + valor.toFixed(0) + '\n' + 
    'Estudante: ' + [estudante ? 'Sim' : 'Não']
    )
  }
}
  

  return (
    
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image 
        source={require('./src/nubank-logo-2.png')}
        style={styles.img}
        />
      </View>
      <View style={styles.containerInputs}>
        <TextInput 
        style={styles.input}
        placeholder='Digite seu nome'
        onChangeText={setNome}
        />
        <TextInput 
        style={styles.input}
        placeholder='Digite sua idade'
        onChangeText={setIdade}
        />
      </View>
    <Text style={styles.sexo}>Qual seu sexo?</Text>
    <Picker 
    style={{color: '#FFF'}}
    selectedValue={sexoSelecionado}
    onValueChange={(itemValue, itemIndex) => setSexoSelecionado(itemValue)}
    >
   
    {sexoItem}
      
    </Picker>
    <Text style={styles.sexo}>Qual seu Limite de renda?</Text>

    <Slider 
    minimumValue={0}
    maximumValue={10000}
    value={valor}
    onValueChange={ (valorSelecionado) => setValor(valorSelecionado)}
    />
    <Text style={styles.valor}>Limite: {valor.toFixed(0)} R$</Text>


    <View style={styles.switchContainer}>

      <Switch 
        style={styles.estudantes}
        value={estudante}
        onValueChange={ (valorSelecionado) => setEstudante(valorSelecionado)}
      />
      <Text style={{color: '#FFF'}}>Você é estudante? {estudante ? 'Sim' : 'Não'}</Text>
    </View>

    <View style={styles.containerBtn}>
      <TouchableOpacity onPress={cadastro} style={styles.btn}>
        <Text style={styles.btnText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
    </View>
    
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#820AD1'
  },
  containerImg:{
    alignItems: 'center',
    marginTop: 50
  },
  img:{
    width: 200,
    height: 100,
    justifyContent: 'center'
  },
  containerInputs: {
    marginTop: 1
  },
  input: {
    backgroundColor: '#FFF',
    color: '#000',
    borderWidth: 1,
    height: 50,
    marginHorizontal: 10,
    marginTop: 15,
    fontSize: 16,
    padding: 10,
    borderRadius: 5
  },
  sexo: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#FFF'

  },
  switchContainer: {

    alignItems: 'center',

    
  },
  containerBtn:{
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#191919',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 15
  },
  btnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  valor: {
    color: '#FFF'
  }

 
 
  

});



