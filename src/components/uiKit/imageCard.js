import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { w, h} from '../../../constant'


const ImageCard = ({data}) => {
    const { h1, cover, container, sub,yearStyle } = styles
    const { picture, first, age} = data
    return (
        <View style={container}>
                <Image style={cover} source = {{uri: picture}} />
                <Text style = {h1}> {first}</Text>
                {/* <Text style={yearStyle}>{age}</Text>             */}
       </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        width: w/1,
        height: h/8,
        paddingVertical: 10,
        backgroundColor: 'pink'
        
    },
    h1: {
        width: w/3,
        alignSelf: 'center',
        textAlignVertical: 'top',
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        
    },

    yearStyle: {
        fontSize: 14,
        color: '#000099'

    },
    cover: {
        width: w/6,
        height: h/12,
        borderRadius: 50


    },
    
})

export  {ImageCard}
