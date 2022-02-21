import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './css/displaycss';

//Componente: display della calcolatrice

export default class Display extends Component {

  componentDidMount() {
    //Creazione timer per il refresh automatico del componente
    this.interval = setInterval(() => this.setState({}), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  } 

  render() {
    return(
        <View>
            <Text style={[styles.display, styles.dimensioni, styles.layout]}>{global.miodisplay}</Text>
        </View>
    );
  }
}