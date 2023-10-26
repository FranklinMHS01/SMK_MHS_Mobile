import { View, Text, Image, Alert, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'

const Success = ({ navigation }) => {
  return (
    <View>
      <View style={style.Top}>
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <View style={style.View}>
                <Image source={require('../aset/arrow.png')} style={{ width: 20, height: 20, borderRadius: 10, }} />
              </View>
            </TouchableOpacity>
            <Text style={style.Kembali}>Kembali</Text>
          </View>
        </View>
      </View>


      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Image style={style.image} source={require('../aset/success.png')} />
        <Text style={{ color: 'black', fontSize: 20, fontWeight: '800', }}>Your Order Success</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <Text style={{ color: 'black', fontWeight: '600' }}>
          selamat orderan ada telah masuk,
        </Text>
        <Text style={{ color: 'black', fontWeight: '600' }}>
          mohon tunggu sembentar untuk pesanan di antar
        </Text>
        <Text style={{ color: 'black', fontWeight: '600' }}>
          kepada anda
        </Text>
      </View>

      <View style={{alignItems:'center'}}>
        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={style.View2}>
              <Text style={style.Pesan}>Pesan Sekarang</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  View: {
    backgroundColor: 'white',
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
    width: 250,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 80,
  },
  Pesan: {
    color: 'white',
    fontWeight: '600',
  },
  Top: {
    backgroundColor: 'red',
    width: 490,
    height: 100,
  },
  Kembali: {
    marginTop: 5,
    fontSize: 20,
    color: 'black',
  },
  image: {
    width: 300,
    height: 300,
  }
})
export default Success