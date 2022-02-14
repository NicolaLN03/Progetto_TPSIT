import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './css/displaycss';

//Componente: display della calcolatrice

export default class Display extends Component {
  render() {
    return(
        <View>
            <Text style={[styles.display, styles.dimensioni, styles.layout]}>{this.props.caption}</Text>
        </View>
    );
  }
}