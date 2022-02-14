import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Tasto from './tasto';
import styles from './css/tastieracss';


//Componente: tastiera della calcolatrice
export default class Tastiera extends Component {
  render() {
    return (
        <View style={styles.tastiera}>
            <View style={styles.riga_tasti}>
                <Tasto caption="AC"/><Tasto caption="&plusmn;"/><Tasto caption="%"/><Tasto caption="/"/>
            </View>
            <View style={styles.riga_tasti}>
                <Tasto caption="7"/><Tasto caption="8"/><Tasto caption="9"/><Tasto caption="x"/>
            </View>
            <View style={styles.riga_tasti}>
                <Tasto caption="4"/><Tasto caption="5"/><Tasto caption="6"/><Tasto caption="-"/>
            </View>
            <View style={styles.riga_tasti}>
                <Tasto caption="1"/><Tasto caption="2"/><Tasto caption="3"/><Tasto caption="+"/>
            </View>
            <View style={styles.riga_tasti}>
                <Tasto caption="0"/><Tasto caption=","/><Tasto caption="="/>
            </View>
        </View>
      );
  } 
}

