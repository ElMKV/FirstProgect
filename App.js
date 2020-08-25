import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import {View, ScrollView, StyleSheet, TextInput } from 'react-native'
import {Header, Text} from './src/components/uiKit'

const url = 'https://next.json-generator.com/api/json/get/NkntzgAGK'
export default class App extends Component {
  
  state = {
        title : 'Диалоги',
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
      {/* <ScrollView>
        <View style = {container}>
        { data.map(item => (
            <Text data = {item} key = {item.id} />   
        ))
        }
      </View>
      </ScrollView> */}
      <View>
        
      </View>


      
    
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
    
  },

  input:{

    backgroundColor: 'gold'

  }
})

 
    

    
