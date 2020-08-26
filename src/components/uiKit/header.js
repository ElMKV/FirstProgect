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
      backgroundColor:'#D3D3D3',
      height:100,
      justifyContent: 'center',
      paddingLeft:22,  
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
  
    
    },
    textStyle : {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    textAlign: 'center',
    marginTop: 20,
    
    }
  })
//export
export {Header} 