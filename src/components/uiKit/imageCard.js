import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { w} from '../../../constant'


const ImageCard = () => {
    const { h1, cover, container, sub } = styles
    return (
        <View style={container}>
            <View style = {sub}>
                <Image style={cover} source = {{uri: 'https://picsum.photos/200/300?random=1'}} />
            </View>
                <Text style = {h1}>Stargate
            </Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: w/2.1
        
    },
    h1: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        alignSelf: 'center',
        textAlign : 'center',
        width: w / 2.4
    },
    cover: {
        width: w/2.3,
        height: w*0.63,
        borderRadius: 10

    },
    sub: {
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4 

    }
})

export  {ImageCard}
