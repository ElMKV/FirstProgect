//import
import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
//body
const Header = ({ title }) => {
    return (
    <View style= {styles.ViewStyles}>
     <Text style={styles.textStyle}>{title}</Text>
   </View>

    )
    
}

const styles = StyleSheet.create({
    ViewStyles: {
      backgroundColor:'white',
      height:70,
      justifyContent: 'center',

      
  
    
    },
    textStyle : {
    color: 'black',
    fontSize: 22,
    fontFamily: 'AvenirNext-DemiBold',
    alignSelf: 'center'
    
    }
  })
//export
export {Header} 