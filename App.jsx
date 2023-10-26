import { View, Text, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Front from './src/patch/Front';
import Home from './src/patch/home';
import Detail from './src/patch/detail';
import Success from './src/patch/success';
import { create } from 'react-test-renderer';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="Front" component={Front} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;