import { View, Text, Image, Alert, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'

const Front = ({navigation}) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200, }}>
            <View>
                <Image style={style.Front} source={require('../aset/Logo_awal.png')} />
            </View>

            <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={style.View2}>
                        <Text style={style.Pesan}>Home</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Front: {
        width: 300,
        height: 300,
    },
    Pesan: {
        color: 'white',
        fontWeight: '900',
    },
    View2: {
        backgroundColor: 'red',
        height: 40,
        width: 150,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical:10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 80,
      },
})

export default Front