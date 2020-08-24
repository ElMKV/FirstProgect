import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {View } from 'react-native';
import Header from './src/components/uiKit/header.js';

export default class App extends Component {
  
  state = {
        title : 'STAR GATE'
      }
      
    
render() {


  return (
  <View>
    <Header title={this.state.title}/>
  </View>
  )
  }
}
    

    
