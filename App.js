import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import {View } from 'react-native'
import {Header, ImageCard} from './src/components/uiKit'

const url = 'https://s3.eu-central-1.wasabisys.com/ghashtag/RNForKids/00-Init/data.json'
export default class App extends Component {
  
  state = {
        title : 'STAR GATE',
        data : []
      }

      componentDidMount = async() => {
        try {
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ data })
          
        } catch (e) {
          throw e
          
        } 
      }
      
          

        

      
      
    
render() {

console.log(this.state)
  return (
  <View>
    <Header title={this.state.title}/>
    <ImageCard></ImageCard>
  </View>
  )
  }
}
    

    
