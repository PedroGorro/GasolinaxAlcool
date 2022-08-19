import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
export default class Entrar extends Component {

  render() {
    return (

      <View style={styles.modalint}>

        <View style={styles.container1}>
          <Image source={require('./gas.png')} style={styles.img} />
        </View>
        <View style={styles.container2}>
          <Text style={styles.txt1}>
            Compensa Usar {this.props.esc}
          </Text>
        </View>

        <View style={styles.modalint2}>

         
            <Text style={styles.txt2}>com os preços:</Text>
        
            <Text style={styles.txt3}>{this.props.abc}</Text>
            <Text style={styles.txt3}>{this.props.def}</Text>
           
           
             <TouchableOpacity style={styles.btn} onPress={this.props.fechar}>

              <Text style={styles.txtbtn}>Entrar</Text>
             </TouchableOpacity>
            
          
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  modalint: {
    flex: 1,
    backgroundColor: '#292929',
    width: '100%',
    height: '100%',
    borderRadius: 15},
  modalint2: {
    flex: 1,
    backgroundColor: '#292929',
    paddingTop:20,
    border:'solid',
    borderColor:'#FF843D',
    alignContent:'center',
   // justifyContent:'center-Top',
    },
  txt1: {
    paddingTop: 30,
    color: '#FFF',
    fontSize: 28,
    textAlign: 'center',
    justifyContent: 'center'

  },
  txt2: {
    paddingTop: 15,
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    
  },
  txt3: {
    paddingTop: 15,
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center'
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 100,
    orderRadius: 15,
    width: 100,
    height: 100,
  },
  btn:{
    border:'solid',
    backgroundColor: '#FF843D',
    borderColor:'#FF843D',
    alignItems: 'center',
    justifyContent: 'center',
    height:40,
    margin:20,
    borderRadius:10
   
  },
  txtbtn:{
    textAlign: 'center',
    fontSize:20
   
  }

})
