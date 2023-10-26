import { View, Text, Image, Alert, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

function Home ({navigation}) {
    return (
        <View>
            <View style={style.View}>
                <Image source={require('../aset/Logo.png')} style={{ width: 145, height: 36, borderRadius: 10, }} />
                <View style={{ height: 25, width: 25, backgroundColor: 'white', alignItems: 'center', borderRadius: 5, }}>
                    <Image source={require('../aset/menu.png')} style={{ width: 20, height: 20 }} />
                </View>
            </View>
            <View style={{ marginLeft: 20, }}>
                <Text style={{ fontWeight: '700', marginTop: 30, color: 'black' }}>selamat datang di kantin smk mhs</Text>
                <Text style={{ fontWeight: '900', marginTop: 10, color: 'black', fontSize: 25, }}>Kantin Mulitstudi</Text>
            </View>

            <ScrollView style={{ marginLeft: 5 }}>
                <Text style={{ marginLeft: 10, marginTop: 10, color: 'black' }}>list Makanan</Text>
                <View style={style.View2}>
                    <View style={{ marginRight: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                            <Image source={require('../aset/burger.jpg')} style={style.Image} />
                        </TouchableOpacity>
                        <Text style={style.Nama}>Burger</Text>
                        <Text style={style.Harga}>Rp 10.000</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                            <Image source={require('../aset/Pizza.jpg')} style={style.Image} />
                        </TouchableOpacity>
                        <Text style={style.Nama}>Pizza</Text>
                        <Text style={style.Harga}>Rp 15.000</Text>
                    </View>
                </View>

                <Text style={{ marginLeft: 10, marginTop: 10, color: 'black' }}>list Minuman</Text>
                <View style={style.View2}>
                    <View style={{ marginRight: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                            <Image source={require('../aset/Mojito.jpg')} style={style.Image} />
                        </TouchableOpacity>
                        <Text style={style.Nama}>Mojito</Text>
                        <Text style={style.Harga}>Rp 5.000</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                            <Image source={require('../aset/Coca_Cola.jpg')} style={style.Image} />
                        </TouchableOpacity>
                        <Text style={style.Nama}>Coca Cola</Text>
                        <Text style={style.Harga}>Rp 7.000</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    View: {
        backgroundColor: 'red',
        height: 52,
        borderRadius: 99,
        marginTop: 16,
        paddingVertical: 10,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    View2: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 'auto'
    },
    Text_front: {
        color: 'black',
    },
    Image: {
        width: 175,
        height: 175,
        borderRadius: 10,
    },

    Nama: {
        color: 'black'
    },
    Harga: {
        color: 'red',
        fontWeight: '600'
    }
})

export default Home