import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import {View, ScrollView, StyleSheet } from 'react-native'
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
  const { title, data} = this.state
  const { container } = styles
  return (
  <View>
      <Header title={title}/>
      <ScrollView>
        <View style = {container}>
        { data.map(item => (
            <ImageCard data = {item} key = {item.id} />   
        ))
        }
      </View>
      </ScrollView>
  </View>
  )
  }
}
const styles = StyleSheet.create({
  container : {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 150
    
  }
})
    

    
