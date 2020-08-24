import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render(){
  return (
    

   <View style= {styles.ViewStyles}>
     <Text style={styles.textStyle}>STAR GATE</Text>
   </View>
  )
  }

}

const styles = StyleSheet.create({
  ViewStyles: {
    backgroundColor:'#30d0fe',
    height:116,
    justifyContent: 'center',
    paddingLeft:22,
    paddingTop: 71,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  
  },
  textStyle : {
    color: '#fff',

  fontSize: 28,
  fontFamily: 'AvenirNext-DemiBold'
  }
})
