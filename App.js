import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tasto from './tasto';
import Tastiera from './tastiera';
import Dysaply from './display'

export default function App() {
  return (
    <View style={styles.calcolatrice}>
      <Dysaply caption='0'></Dysaply>
      <Tastiera></Tastiera>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  calcolatrice: {
    alignSelf: 'center',
    top: 100,
    borderRadius: 20,
    backgroundColor: '#515151',
    overflow: 'hidden',
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7.5,
    elevation: 12,
  },
});
