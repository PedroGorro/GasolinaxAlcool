/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Modal,
  Button,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Entrar from './Entrar';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      alcool: 0,
      gasolina: 0,
      mvisible: false,
      escolha:''
    //  alcool1:123,
    //  gasolina1:0,
    };

//bind - para fazer o this funcionar corretamente as funções
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
    this.gravar = this.gravar.bind(this);
}

//funções para o componentDidMount e componentDidUpdate
sair(t){
this.setState({mvisible:t})
}
entrar(){
 this.setState({mvisible:true})
}

gravar(){
  this.setState({//alcool1:this.state.alcool,
   // gasolina1:this.state.gasolina,
    mvisible:true});

    if(this.state.alcool / this.state.gasolina > 0.7){
      this.setState({escolha:'gasolina'});
    }    else{
      this.setState({escolha:'Alcool'});
    }

}

render(){
  return(
    <View style={styles.container}>
      <View style={styles.container}>
      <Image
        source={require('./logo.png')}
        style={styles.img}
      />
        <Text style={styles.texto} >Qual é a Melhor Opção?</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.containerInferior}>
        <View>
      <Text style={styles.texto2}>Alcool(preço por litro) </Text>
      <TextInput
      keyboardType = 'number-pad'
        style={styles.input}
        value={this.state.alcool}
        onChangeText={(x)=>this.setState({alcool:x})}
      />
      </View>

      <View>
<Text style={styles.texto2}>Gasolina(preço por litro) </Text>
      <TextInput
      keyboardType = 'number-pad'
        style={styles.input}
        value={this.state.gasolina}
        onChangeText={(gasolina)=>this.setState({gasolina})}
      />
      </View>
      </View>
      <View style={styles.teste}>
      <Button
      color="#FF843D"
      borderRadius={10}
      onPress={this.gravar}
      title="Calcular"
      />
      </View>
      </View>
      <Modal transparent={true} animationType="slide" visible={this.state.mvisible}>
            <View style={{margin:15, flex:1, alignItems:'center', justifyContent: 'center'}}>
               <Entrar fechar={ () => this.sair(false)} 
               abc = {this.state.alcool}
               def = {this.state.gasolina}
               esc = {this.state.escolha}/>
            </View>
          </Modal>
    </View>
  )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor:'#080808'
  },
  containerInferior:{
    //flex: 1,
    marginTop: 20,
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    height:150
  },
  teste:{
    marginTop:30
  },
  viewInput:{
    flexDirection: 'Column',
    alignItems: 'center',
    marginTop: 20
  },
  img:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 100,
    orderRadius: 15,
    width: 100,
    height: 100,
  },
  input:{
    width: 350,
    height: 40,
    padding: 10,
    backgroundColor:'#fff',
    borderRadius:8
  },
  botao:{
    backgroundColor: '#FF843D',
    color: '#FF843D',
    height: 40,
    padding: 10,
    marginLeft: 4,
    marginTop:30,
    paddingTop:30
  },
  texto:{
    marginTop: 15,
    fontSize: 30,
    color:'#fff'
  },
  texto2:{
    marginTop: 15,
    fontSize: 20,
    color:'#fff'
  }

  
});

