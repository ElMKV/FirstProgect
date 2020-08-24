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
    fontFamily: 'AvenirNext-DemiBold',
    
    }
  })
//export
export default Header