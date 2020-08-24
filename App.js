import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {View } from 'react-native';
import Header from './src/components/uiKit/header.js';
const url = 'https://s3.eu-central-1.wasabisys.com/ghashtag/RNForKids/00-Init/data.json'
export default class App extends Component {
  
  state = {
        title : 'STAR GATE'
      }

      componentDidMount = async() => {
        const response = await fetch (url)
        const data = await response.json()
        console.log(data)

        this.setState({ data })

      }
      
    
render() {

console.log(this.state)
  return (
  <View>
    <Header title={this.state.title}/>
  </View>
  )
  }
}
    

    
