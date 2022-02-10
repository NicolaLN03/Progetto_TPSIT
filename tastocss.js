import { StyleSheet } from "react-native";

/* CSS dei tasti */

export default StyleSheet.create({
    testo: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Verdana',
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black',
    },
    dimensioni: {
        height: 80,
        width: 80,
    },
    dimensionizero: {
        height: 80,
        width: 160+1+1,
    },
    tasto: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 2,
        margin: 1,
    },
    //Colori pulsanti
    numero: {
        backgroundColor: '#656565',
    },
    funzione: {
        backgroundColor: '#F4A23E',
    },
    funzioneb: {
        backgroundColor: '#464646',
    },

})