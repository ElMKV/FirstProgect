import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { w, h } from '../../../constant'


const ImageCard = ({ data }) => {
    const { h1, cover, container, yearStyle, containerNameBalance, containerNameBalanceStyle } = styles
    const { picture, first, age, balance } = data
    return (
        <View style={container}>
            <Image style={cover} source={{ uri: picture }} />
            <View style={containerNameBalance}>
                <Text style={h1}> {first}</Text>
                <Text style={containerNameBalanceStyle}>{balance}</Text>
            </View>

            <Text style={yearStyle}>{age}</Text>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: h / 8,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth


    },
    h1: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        flex: 2



    },

    yearStyle: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        flex: 1




    },
    cover: {
        borderRadius: 50,
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10




    },
    containerNameBalance: {
        flexDirection: 'column',
        flex: 3,
        marginLeft: 5,




    },
    containerNameBalanceStyle: {
        textAlignVertical: 'top',
        fontSize: 16,
        color: '#696969',
    }



})

export { ImageCard }
