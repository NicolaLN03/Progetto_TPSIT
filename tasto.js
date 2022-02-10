import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './tastocss';
import {HtmlSpecialChars_decode} from "./htmlspecialchars";

//Componente: tasto della tastiera
export default class Tasto extends Component {
    
    contiene (pattern, carattere)
    {
        return pattern.indexOf(carattere);
    }
    renderZero(){
        //Tasto zero
        return (
            <View >
                <TouchableOpacity style={[styles.tasto, styles.dimensionizero, styles.numero]}
                    onPress={() => Alert.alert("Tasto premuto!")}
                >
                <Text style={[styles.testo, styles.dimensioni]}>{this.props.caption}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderNumero(){
        //Tasti Numerici
        return (
            <View >
                <TouchableOpacity style={[styles.tasto, styles.dimensioni, styles.numero]}
                    onPress={() => Alert.alert("Tasto premuto!")}
                >
                <Text style={[styles.testo, styles.dimensioni]}>{this.props.caption}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderFunzione(){
        //Tasti Funzione
        return (
            <View >
                <TouchableOpacity style={[styles.tasto, styles.dimensioni, styles.funzione]}
                    onPress={() => Alert.alert("Tasto premuto!")}
                >
                <Text style={[styles.testo, styles.dimensioni]}>{this.props.caption}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderFunzioneb(){
        <View >
            <TouchableOpacity style={[styles.tasto, styles.dimensioni, styles.funzioneb]}
                onPress={() => Alert.alert("Tasto premuto!")}
            >
            <Text style={[styles.testo, styles.dimensioni]}>{this.props.caption}</Text>
            </TouchableOpacity>
        </View>
    }

  render() {
      if(this.contiene("0",this.props.caption) >-1)
      { //Per tasto zero
        return this.renderZero();
      }else if (this.contiene("123456789,",this.props.caption) >-1)
      { //Per tasto numerico
        return this.renderNumero();
      }else if(this.contiene("AC%"+HtmlSpecialChars_decode("&plusmn;"),this.props.caption) >-1)
      { //Per tasto funzione b
        return this.renderFunzioneb();
      }else
      { //default
        return this.renderFunzione();
      }
  } 
}

