import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'


import Navigation from './Navigation'

export default function App() {
  return (
    <>
      <StatusBar style = "light" backgroundColor="#000"/>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </>
  );
}

