import { View, Text, Image, Alert, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

function Detail({ navigation }) {
  return (
    <View style={{ marginTop: 20, }}>
      <View style={{ flexDirection: 'row', }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={style.View}>
            <Image source={require('../aset/arrow.png')} style={{ width: 20, height: 20, borderRadius: 10, }} />
          </View>
        </TouchableOpacity>
        <Text style={style.Kembali}>Kembali</Text>
      </View>
      <View style={{ marginLeft: 10, }}>
        <Image style={style.Image} source={require('../aset/Burger_detail.jpg')} />
      </View>
      <View style={style.view1}>
        <Text style={style.Nama}>Burger Ayam</Text>
        <Text style={style.Harga}>Rp. 10,000</Text>
      </View>
      <View style={{ marginHorizontal: 20, borderTopWidth: 2, marginTop: 20 }}>
        <Text style={{ color: 'black' }}>ini merupakan burger ayam terbaik di kantin smk Multistudi Highschool</Text>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 40 }}>
        <Text style={style.Nama}>Masukkan Jumlah Pesanan Anda</Text>
        <TextInput style={{ borderWidth: 1, borderRadius: 10, }}></TextInput>
      </View>
 
      <View style={{ flexDirection: 'row', }}>
        <TouchableOpacity onPress={() => navigation.navigate('Success')}>
          <View style={style.View2}>
                    <Text style={style.Pesan}>Pesan Sekarang</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  View: {
    backgroundColor: 'red',
    height: 40,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  View2: {
    backgroundColor: 'red',
    height: 40,
    width: 450,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical:10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 80,
  },
  Pesan: {
    color: 'white',
    fontWeight: '600',
  },
  Kembali: {
    marginTop: 5,
    fontSize: 20,
    color: 'black',
  },
  Image: {
    marginTop: 30,
    width: 460,
    height: 300,
    borderRadius: 10,
  },

  view1: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  Nama: {
    color: 'black',
    fontWeight: '800',
    fontSize: 20
  },
  Harga: {
    color: 'red',
    fontWeight: '800',
    fontSize: 20,
  }
})

export default Detail